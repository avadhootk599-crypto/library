class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }

  getBooks(bookId) {
    return this.books.find((book) => book.id === bookId);
  }
  toggleRead(bookId) {
    const book = this.getBooks(bookId);
    if (book) {
      book.toggleRead();
    }
  }
}
const library = new Library();

class Book {
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.addBook(book);
}

function displaybooks() {
  const shelf = document.querySelector(".shelf");
  shelf.innerHTML = "";
  for (const book of library.books) {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;
    const title = document.createElement("h2");
    title.textContent = book.title;
    card.appendChild(title);
    const author = document.createElement("h3");
    author.textContent = book.author;
    card.appendChild(author);
    const pages = document.createElement("p");
    pages.textContent = book.pages;
    card.appendChild(pages);
    shelf.appendChild(card);
    const readButton = document.createElement("button");
    if (book.read) {
      readButton.textContent = "Completed";
    } else {
      readButton.textContent = "Not Completed";
    }
    card.appendChild(readButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    card.appendChild(deleteButton);

    deleteButton.addEventListener("click", (evt) => {
      const card = evt.target.closest(".book-card");
      const bookId = card.dataset.id;

      library.removeBook(bookId);
      displaybooks();
    });

    readButton.addEventListener("click", (evt) => {
      const card = evt.target.closest(".book-card");
      const bookId = card.dataset.id;

      library.toggleRead(bookId);
      displaybooks();
    });
  }
}

const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".addbook");

addBookButton.addEventListener("click", () => {
  dialog.showModal();
});

const CancelButton = document.querySelector("#cancel-btn");

CancelButton.addEventListener("click", () => {
  dialog.close();
});

const form = document.querySelector("#add-book-form");
const title = document.querySelector("#book_title");
const author = document.querySelector("#book_author");
const pages = document.querySelector("#book_pages");
const read = document.querySelector("#read_check");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const bookPages = Number(pages.value);
  const bookRead = read.checked;

  addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead);
  displaybooks();
  dialog.close();
  form.reset();
});

displaybooks();
