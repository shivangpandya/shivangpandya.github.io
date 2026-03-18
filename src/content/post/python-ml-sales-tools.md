---
title: "Building ML Tools for Sales Teams: Lessons from Credit Suisse"
description: "What I learned building a deep learning recommender system for a global markets sales team — the technical and organisational challenges."
publishDate: "2024-09-10"
tags: ["python", "machine-learning", "keras", "flask"]
---

During my summer at Credit Suisse's Global Markets team, I built a recommender system to help the sales team improve KPIs on structured product derivatives. Here's what I learned — technically and organisationally.

## The problem

The sales team had a catalogue of 27,000 structured products. Matching the right product to the right client was done largely by experience and intuition. Experienced sales people had a feel for which clients would be interested in which products, but that knowledge didn't scale and wasn't systematically captured anywhere.

We wanted to see if ML could surface better matches — and do it in a way that slotted into the existing workflow without friction.

## The model

We used a Keras-based deep learning model that analysed client transaction history and behaviour patterns to predict product affinity scores.

```python
from tensorflow import keras
from keras.layers import Embedding, Flatten, Dense, Dropout

model = keras.Sequential([
    Embedding(num_clients, 32, input_length=1),
    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.3),
    Dense(64, activation='relu'),
    Dense(num_products, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
```

The training data was client interaction logs — products viewed, inquired about, and purchased over a multi-year window. Cold start (new clients with no history) was handled with a fallback to popularity-based recommendations within their client segment.

## Serving with Flask

We exposed the model via a Flask RESTful API so the sales team's CRM tooling could query it without any client-side changes.

```python
from flask import Flask, request, jsonify
import numpy as np

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    client_id = request.json['client_id']
    top_k = request.json.get('top_k', 10)
    
    scores = model.predict(np.array([[client_id]]))
    top_products = np.argsort(scores[0])[::-1][:top_k]
    
    return jsonify({'recommendations': top_products.tolist()})
```

Latency was critical — recommendations needed to appear before a client call started. We kept inference under 200ms by keeping the model in memory and batching where possible.

## The organisational side

The technical work was maybe 60% of the effort. The rest was:

- **Explaining the model to non-technical stakeholders.** "What does it actually do?" is a question you'll answer many times. Simple analogies and concrete examples of correct recommendations built trust faster than any metric.
- **Incorporating sales team feedback.** Early recommendations surfaced some products that were technically high-affinity but practically inappropriate (wrong risk profile, wrong jurisdiction). Domain knowledge gaps in training data. The model improved significantly after structured feedback sessions with senior sales people.
- **Managing expectations around the 41% conversion rate improvement.** That was a model prediction, not a live A/B test result. We were careful to frame it as a projection, not a guarantee.

## What I'd do differently

I'd invest more time upfront in feature engineering from domain knowledge, rather than letting the model figure everything out from raw interaction data. The sales team knew things about client segments and product suitability that would have meaningfully improved training data quality — and we only discovered that halfway through.
