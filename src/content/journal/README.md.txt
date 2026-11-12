How to publish an article

1. Make a folder: src/content/journal/<slug>/
2. Put index.md in it with the frontmatter below, and the photographs beside it (hero.jpg, pair.jpg ...).
3. Set draft: false. Commit on main. Netlify publishes in about a minute.

---
title: Title with a full stop.
standfirst: One line, set in the serif.
excerpt: Up to 200 characters, plain. Used in lists and search results.
date: 2026-11-15
category: Observations | Discoveries | Field Notes | No Product Needed
hero: ./hero.jpg
heroAlt: What is in the photograph, for screen readers.
heroCaption: Optional caption under the photograph.
featured: true
draft: false
---

Body in markdown. ## for subheads. For an image with a caption:

<figure>
  <img src="./pair.jpg" alt="" />
  <figcaption>Left: twelve movements. Right: two.</figcaption>
</figure>
