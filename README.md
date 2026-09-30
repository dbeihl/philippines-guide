# Philippines Travel Guide

David's dumb guide to traveling in the Philippines, published at https://dbeihl.github.io/philippines-guide/.

The whole guide is one Markdown file: `src/pages/index.md`. Edit it and merge to `main`; the Pages workflow rebuilds and publishes the site. `src/layouts/Guide.astro` handles the cover photo, the table of contents (built from the `##` and `###` headings), and the styling. Blockquotes render as travel-tip callouts.

## Run it locally

```sh
npm install
npm run dev
```

Then open http://localhost:4321/philippines-guide/.

## Change the cover photo

Put the image in `src/assets/` and set `cover:` and `coverAlt:` in the front matter of `index.md`. Strip location metadata from phone photos before committing them.
