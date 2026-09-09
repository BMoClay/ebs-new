---
name: add-news
description: Add a news item (exhibition, book launch, fair appearance, invitation) to the e.bs (editionsbierisusanne) catalog site's News modal. Use when the user supplies exhibition/event copy, an invitation card or flyer image, a press text, or asks to "add news", "add an exhibition", "post an announcement", or to move an existing item into Past News. Handles the asset import, the entry block, and newest-first ordering.
---

# Add a News Item to the e.bs Site

News lives in one hand-maintained JSX file rendered inside a modal. There is no
data array and no CMS — an entry is a literal block of markup, and its position
in the file *is* its position on screen. Follow the existing structure exactly;
the visual rhythm of the modal depends on it.

## Where things live

- **The whole news feed:** [src/components/News.jsx](../../../src/components/News.jsx) — one component, top-to-bottom, newest first.
- **The trigger:** [src/components/NewsContainer.jsx](../../../src/components/NewsContainer.jsx) — renders a `News` button that opens the modal. Nothing to change here when adding an item.
- **Where it mounts:** [src/routes/root.jsx](../../../src/routes/root.jsx) renders `<NewsContainer />` pinned top-right.
- **Styling:** `src/components/news.css` (`.modalBackground`) plus Tailwind utilities inline.
- **Assets:** `assets/news/` — invitation cards, flyers, posters, event video. Imported with a leading-slash path, e.g. `import invito1 from "/assets/news/INVITO1.jpg";`.

## Structure of the file

```
modalBackground
  ├─ close button (x)
  ├─ {/* new news */}      ← newest entries go directly below this marker
  │    entry, entry, …          (current items, newest first)
  ├─ <div className="border-b"> Past News</div>
  └─ archived entries…          (older items, newest first)
```

**Newest first.** A new item goes immediately after the `{/* new news */}`
comment, pushing the previous top entry down. Do not append to the bottom — the
bottom of the file is the oldest archive material.

## Steps

1. **Place the asset.** Put the invitation card / flyer / poster in
   `assets/news/`. Confirm the file exists before importing it. Keep the
   filename the client supplied — these are their reference names.

2. **Import it** at the top of `News.jsx`, alongside the existing news imports:
   ```js
   import invito1 from "/assets/news/INVITO1.jpg";
   ```

3. **Add the entry block** directly below `{/* new news */}`. The standard
   shape — image, then text, then a rule:

   ```jsx
   <div className="flex justify-center">
       <div className="max-w-3xl">
           <img src={invito1} />
       </div>
   </div>
   <div className="text-left text-base">
       <br />
       <p>
           <b>TITLE OF THE EXHIBITION OR EVENT</b>
           <br />
           Street address
           <br />
           Postcode City
           <br />
           <u><a href="https://venue.example" target="_blank">venue.example</a></u>
           <br />
           <br />
           Month D – Month D, YYYY
           <br />
           Curated / conceived by Susanne Bieri (ebs)
           <br />
           Opening: Day, Month D, YYYY, 6 PM
       </p>
       <br />
       <p>
           First body paragraph.
       </p>
       <br />
       <p>
           Second body paragraph.
       </p>
   </div>
   <div className="border-b"></div>
   ```

   Conventions that matter:

   | Element | Rule |
   |---|---|
   | Wrapper | `text-left text-base` for current entries. Older archive blocks use `text-center` or `text-xs` — don't copy those for a new item. |
   | Image | Always `flex justify-center` → `max-w-3xl` → `<img>`. Use `max-w-80` / `max-w-48` / `max-w-32` only for small logos, not for a card or poster. |
   | Heading | The title goes in `<b>` on the first line of the first `<p>`; venue, dates and opening follow as `<br />`-separated lines in that same `<p>`. |
   | Paragraph spacing | A bare `<br />` **between** `<p>` elements. The file does not use margin classes for this — match it. |
   | Book & artwork titles | `<i>…</i>`, e.g. `<i>ECHO</i>`, `<i>Le Livre du Thé</i>`. |
   | Links | `<u><a href="…" target="_blank">label</a></u>` — underline via `<u>`, not a class. |
   | Trailing rule | Close every entry with `<div className="border-b"></div>`. |
   | Extra images | A second image after the text is fine (see the ECHO entry) — same `flex justify-center` / `max-w-3xl` wrapper. |
   | Video | `<div className="video-container"><video src={x} controls className="w-full pt-2 px-4" /></div>`. |

4. **Clean the supplied copy.** Text pasted from a PDF or invitation routinely
   arrives with broken ligatures — `fi gures`, `refl ecting`, `infl uential`,
   `fl uidly`, `Offi cina`, `fi rst`. Repair these. Keep the client's curly
   quotes (`’ “ ”`) and en/em dashes; the file uses them literally throughout.

5. **Don't invent facts.** If the copy has no dates, no opening time, or no
   street address, leave those lines out and say so in your report. An
   exhibition entry with a wrong date is worse than one with none.

6. **Retire the previous item if asked.** "Move X to past news" means cutting
   that entry's block and re-inserting it directly below the
   `<div className="border-b"> Past News</div>` line, unchanged.

7. **Verify the build:**
   ```bash
   npm install   # if node_modules is absent
   npm run build
   ```
   Confirm the new asset appears in the output (e.g. `dist/assets/INVITO1-*.jpg`)
   and the build succeeds. Do not commit or push unless asked.

## Gotchas

- **The modal has no scroll restoration or routing** — an entry is only ever
  seen by someone who opened the News button, so the top slot is the only one
  with real visibility. Order matters more than it looks.
- **JSX text is not HTML.** Curly braces in prose must be escaped or avoided;
  apostrophes and quotes are fine as literal characters, which is what the rest
  of the file does. Don't convert them to `&rsquo;` entities.
- **`News.jsx` is a single large component with no props** beyond `closeModal`.
  Resist refactoring it into a data array while adding an item — that is a
  separate change, and mixing it with new content makes the diff unreviewable.
- **This file is high-churn.** It conflicts across parallel PRs easily (it has
  already collided with the `echo5` branch). Put news edits in their own commit,
  made immediately before opening the PR.
- An exhibition that also ships a book usually needs an
  [add-book](../add-book/SKILL.md) pass too — the news entry and the catalog
  entry are separate places.
