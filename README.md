# franplt.com

Francesco Paltrinieri’s personal website.

## Edit content

### Pages

- **Home**: `src/index.njk`
- **About**: `src/about.njk`
- **Articles index**: `src/articles/index.njk`

### Add a new article

Add **one Markdown file** under `src/articles/`.

Example:

`src/articles/my-new-post.md`

```md
---
title: My new post
date: 2026-10-08
description: One short sentence.
layout: article.njk
tags: [article]
---

Write the article here in Markdown.
```

It will be published at `/articles/my-new-post/`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

