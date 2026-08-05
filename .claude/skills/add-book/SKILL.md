---
name: add-book
description: Add a new artist book to the e.bs (editionsbierisusanne) catalog site. Use when the user asks to "add a book", provides book metadata (title, artist, year, pages, size, binding, price, edition, text/notes), or supplies images/a video to publish as a new catalog entry. Handles the data object, asset imports, homepage listing link, and muted-video wiring.
---

# Add a Book to the e.bs Catalog

This is a Vite + React (react-router-dom) static catalog. Books are plain data
objects; images and videos are imported as bundled asset URLs. Follow these
steps exactly — the data layout and the homepage listing are hand-maintained.

## Where things live

- **Book data (source of truth):** [src/components/bookObjects.js](../../../src/components/bookObjects.js) — the `BOOKS` array. `src/books.js` re-exports it via `getBooks()` / `getBook(id)`; `src/data/bookData.js` is stale/unused — ignore it.
- **Detail page:** [src/routes/book.jsx](../../../src/routes/book.jsx) — renders one book. Loads by numeric `id`.
- **Image/video slider:** [src/components/ImageSlider.jsx](../../../src/components/ImageSlider.jsx) — cycles `book.images`; renders a muted, looping `<video>` for entries whose `imgFile` URL ends in `.mp4/.mov/.webm/.ogg`, else an `<img>`.
- **Homepage listing:** [src/routes/root.jsx](../../../src/routes/root.jsx) — a hand-built grid of logo rows with `<Link to={`books/N`}>`. New books must be linked here manually or they are unreachable.
- **Assets:** `assets/` (images under `assets/coverImages/`, `assets/logosBookPage/`, etc.; video under `assets/video/`). Imported with a leading-slash path, e.g. `import x from "/assets/video/roll-1.mp4";`.

## Steps

1. **Place assets.** Ensure images/video exist under `assets/`. Video goes in `assets/video/`. Confirm the file is present before importing it.

2. **Import the assets** at the top of `src/components/bookObjects.js` alongside the existing imports:
   ```js
   import myVideo from "/assets/video/roll-1.mp4";
   import myImg1 from "/assets/coverImages/whatever.jpg";
   ```

3. **Add the book object** to the end of the `BOOKS` array (before the closing `]`). Use the next free integer `id`. Field reference:

   | Field | Notes |
   |---|---|
   | `id` | next integer, unique |
   | `bookTitle` / `headerArtist` | shown in the page header |
   | `artist` | |
   | `urlText` | slug-ish, not routed but kept for consistency |
   | `year`, `pages` | `pages` is a number |
   | `size` | e.g. `"33 x 33 cm"` |
   | `binding`, `price`, `edition` | strings; `price` like `"CHF 50.-"` |
   | `editionAmount` | string, e.g. `"300 copies"` |
   | `attribution` | lead paragraph |
   | `notes`, `notes2`…`notes8` | body paragraphs, rendered in order. Odd-numbered notes render flush-left, even-numbered are indented (`pl-4`) — use `notes`, `notes3`, `notes5`, `notes7` for normal paragraphs and the even ones for sub/quote lines. |
   | `bio` | artist bio paragraph |
   | `websiteUrl` / `website` | link + label; use `""` if none |
   | `logo` | one of the imported logo assets (pick an unused `logoA*`) |
   | `video` | optional bundled video URL — renders muted+looping in the detail body. This alone is enough to show a video; do **not** also duplicate it into `images`. |
   | `images` | array of `{ id, imgFile }` still frames for the slider. Omit for a video-only book (the `video:` field covers it). A video URL as `imgFile` also renders muted+looping in the slider, but prefer `video:` for a single clip. |
   | `available` | `true` |

   Long catalog "Text" blurbs map to `attribution` (first sentence/occasion line) + `notes`/`notes3`/`notes5`/`notes7` for the body paragraphs.

### Normal + special editions (two catalog rows, one artwork)

A title often ships as a **normal** edition and a **special/signed** edition — two
separate `BOOKS` entries (see 484 = ids 5/6, ROLLINGROLL = ids 8/9). Convention:

- Give each its own `id`. The special entry's `bookTitle` ends with `: special edition` and its `year` gets a trailing `*` (e.g. `"2026*"`).
- The special entry carries the higher `price`, the signed/numbered range in `editionAmount` (e.g. `"1/30–30/30"`), and the full "First, of which N copies are signed…" sentence in `edition`.
- Both can reuse the same `logo` and the same `video`.
- On the homepage they share **one row**, joined by a `/` (see step 5).

4. **Mute is automatic** — do not add unmuted/autoplaying video. `ImageSlider.jsx` and `book.jsx` already render videos with `muted loop playsInline`. Do not regress that.

5. **Link it on the homepage.** `src/routes/root.jsx` is a hand-built stack of
   `border-b-[2px]` row `<div>`s. Each row is tagged with a `{/* N */}` comment,
   and **N counts top-to-bottom (currently 1–13)** — keep that numbering
   contiguous and in visual order when you add/rearrange rows. To place a book at
   a specific position, edit the row with that `{/* N */}` marker (a plain
   `logo*` filler row is a free slot you can convert into a link row).

   A single-edition row links once:
   ```jsx
   {/* 4 */}
   <div className="flex items-center gap-2 border-b-[2px]">
     <Link to={`books/8`} className="flex items-center gap-2">
       <img src={books[7].logo} className="w-10 h-9" />
       <h1 className="text-xs">{books[7].year}</h1>
     </Link>
   </div>
   ```

   A **normal + special** pair shares one row, joined by a `/` — the first link
   carries the logo image, the second is year-only (no image):
   ```jsx
   {/* 4 - ROLLINGROLL (normal + special edition) */}
   <div className="flex items-center gap-2 border-b-[2px]">
     <Link to={`books/8`} className="flex items-center gap-2">
       <img src={books[7].logo} className="w-10 h-9" />
       <h1 className="text-xs">{books[7].year}</h1>
     </Link>
     <span className="text-xs">/</span>
     <Link to={`books/9`} className="flex items-center gap-2">
       <h1 className="text-xs">{books[8].year}</h1>
     </Link>
   </div>
   ```
   The array index is `id - 1` (`books[7]` ⇒ id 8). The special edition's
   `year` (e.g. `"2026*"`) is what renders as the second label.

6. **Verify the build:**
   ```bash
   npm install   # if node_modules is absent
   npm run build
   ```
   Confirm the new asset (e.g. `dist/assets/roll-1-*.mp4`) appears in the output and the build succeeds. Do not commit or push unless asked.

## Gotchas

- `getBook` matches by `Number(id)`, so `id` must be a number and the homepage `to={`books/N`}` must match it.
- The homepage is not auto-generated from `BOOKS`; a book with no `<Link>` is orphaned. Row order is manual and the `{/* N */}` markers are top-to-bottom — keep them contiguous.
- A book id (route `books/N`) is independent of its homepage row position — don't assume they match.
- Large videos inflate the bundle (Vite warns at 500 kB) — acceptable here, but prefer compressed `.mp4` over `.mov` when possible.
