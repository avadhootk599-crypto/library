# Library

A simple book-tracking app built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum. Add books to your shelf, mark them read or not completed, and remove them — all state lives in memory via a JS object constructor.

![Library screenshot](screenshot.png)

## Features

- Add a book via a modal `<dialog>` form (title, author, page count, read status)
- Toggle a book between **Completed** / **Not Completed**
- Delete a book from the shelf
- Each book card displays with a themed "spine" color and a ribbon marker once marked read

## Built with

- HTML5 `<dialog>` element for the add-book modal
- Vanilla JavaScript (constructor functions, `crypto.randomUUID()` for unique IDs)
- CSS Grid for the responsive shelf layout

## Run it locally

1. Clone the repo:
   ```bash
   git clone <your-repo-url>
   ```
2. Open `index.html` in your browser — no build step or dependencies required.

## Live demo

[View on GitHub Pages](#) <!-- replace with your deployed link -->

## What I practiced

- Using a constructor function to model data (`Book`)
- Managing an in-memory array as the single source of truth, re-rendering the DOM from it
- Wiring up a native `<dialog>` modal (`showModal()` / `close()`)
- Matching event handlers to dynamically created elements

## Possible next steps

- Persist the library to `localStorage` so books survive a page refresh
- Form validation (e.g. page count > 0)
- Event delegation on the shelf container instead of per-card listeners
