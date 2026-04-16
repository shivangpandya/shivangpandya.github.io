# shivangpandya.github.io

Personal portfolio, blog, and TIL site built with [Astro](https://astro.build), with a custom editorial theme inspired by `space-ahead`.

## 🚀 Deploy to GitHub Pages (one-time setup)

### 1. Push this repo to GitHub

```bash
git init
git add .
git commit -m "initial site"
git branch -M main
git remote add origin https://github.com/shivangpandya/shivangpandya.github.io.git
git push -u origin main
```

### 2. Enable GitHub Pages

- Go to your repo on GitHub → **Settings** → **Pages**
- Under **Source**, select **GitHub Actions**
- Save

That's it. The site will be live at **https://shivangpandya.github.io** in ~2 minutes.

Every future `git push` to `main` automatically rebuilds and redeploys the site.

---

## ✍️ Adding a blog post

Create a new `.md` file in `src/content/post/`:

```
src/content/post/my-new-post.md
```

The file must start with frontmatter:

```markdown
---
title: "Your Post Title"
description: "A one or two sentence summary. Must be 50–160 characters."
publishDate: "2025-03-18"
tags: ["oci", "cloud"]
---

Your post content in plain Markdown here.

## Section heading

More content...
```

Then push:

```bash
git add .
git commit -m "add post: my-new-post"
git push
```

The site rebuilds automatically. Done.

---

## ✍️ Adding a TIL note (from Obsidian)

Create a new `.md` file in `src/content/note/`:

```
src/content/note/my-til-note.md
```

The file must start with frontmatter:

```markdown
---
title: "Your TIL Title"
publishDate: "2026-04-15"
description: "Optional short summary."
draft: false
---

Your markdown note body from Obsidian.
```

Then push:

```bash
git add .
git commit -m "add til: my-til-note"
git push
```

The TIL list and detail page rebuild automatically.

---

## 🖼 Replacing the hero image later

The homepage hero image is controlled from `src/site.config.ts`:

```ts
heroImage: {
  src: "/images/hero-sample-main.svg",
  alt: "Abstract illustration of cloud architecture layers and connected systems.",
},
```

To replace it with your own image later:

1. Put your image in `public/images/` such as `public/images/shivang-hero.jpg`
2. Update `siteConfig.heroImage.src` to `"/images/shivang-hero.jpg"`
3. Update `siteConfig.heroImage.alt` with the right description
4. Run `npm run dev` or `npm run build` to verify it renders correctly

The bundled sample image lives at `public/images/hero-sample-main.svg`.

---

## 📁 Project structure

```
shivangpandya.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions (auto-deploys on push)
├── src/
│   ├── content/
│   │   ├── post/               ← Blog posts (.md files)
│   │   │   ├── oci-vs-aws-enterprise.md
│   │   │   ├── integration-patterns-oci.md
│   │   │   ├── on-premise-to-oci-migration.md
│   │   │   └── python-ml-sales-tools.md
│   │   └── note/               ← TIL notes (.md files)
│   │       ├── oci-always-free.md
│   │       ├── terraform-oci-remote-state.md
│   │       └── oke-kubernetes.md
│   ├── components/
│   │   ├── PostPreview.astro
│   │   ├── NotePreview.astro
│   │   └── SocialList.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro         ← Home
│   │   ├── about.astro         ← About
│   │   ├── projects.astro      ← Redirects /projects/ -> /til/
│   │   ├── 404.astro
│   │   ├── rss.xml.ts          ← RSS feed
│   │   ├── posts/
│   │       ├── index.astro     ← Blog listing
│   │       └── [slug].astro    ← Individual post
│   │   └── til/
│   │       ├── index.astro     ← TIL listing
│   │       └── [slug].astro    ← Individual TIL note
│   ├── site.config.ts          ← Site name, nav links, date format
│   ├── content.config.ts       ← Post/note schema
│   └── types.ts
├── public/
│   ├── images/
│   │   └── hero-sample-main.svg
│   └── robots.txt
├── astro.config.ts
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## 🛠 Local development

```bash
npm install
npm run dev          # → http://localhost:4321
```

## ✏️ Customising

| What | Where |
|---|---|
| Your name, bio description | `src/pages/index.astro` |
| Nav links | `src/site.config.ts` → `menuLinks` |
| Social links | `src/components/SocialList.astro` |
| About page | `src/pages/about.astro` |
| TIL page | `src/pages/til/index.astro` |
| TIL detail page | `src/pages/til/[slug].astro` |
| Legacy projects route | `src/pages/projects.astro` |
| Hero image config | `src/site.config.ts` → `heroImage` |
| Hero image assets | `public/images/*` |
| Blog posts | `src/content/post/*.md` |
| TIL notes | `src/content/note/*.md` |
| Site URL | `astro.config.ts` → `site` |
