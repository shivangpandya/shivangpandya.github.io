# shivangpandya.github.io

Personal site and blog built with [Astro](https://astro.build) and the [Cactus theme](https://github.com/chrismwilliams/astro-theme-cactus).

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
│   │   └── note/               ← Short notes (.md files)
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
│   │   ├── projects.astro      ← Projects
│   │   ├── 404.astro
│   │   ├── rss.xml.ts          ← RSS feed
│   │   └── posts/
│   │       ├── index.astro     ← Blog listing
│   │       └── [slug].astro    ← Individual post
│   ├── site.config.ts          ← Site name, nav links, date format
│   ├── content.config.ts       ← Post/note schema
│   └── types.ts
├── public/
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
| Projects | `src/pages/projects.astro` |
| Blog posts | `src/content/post/*.md` |
| Short notes | `src/content/note/*.md` |
| Site URL | `astro.config.ts` → `site` |
