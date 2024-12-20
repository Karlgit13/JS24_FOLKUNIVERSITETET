import { Book } from "./interfaces";

const API_URL =
  "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";

async function fetchBooks(): Promise<Book[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const books: Book[] = await response.json();
  return books;
}

function displayBookList(books: Book[]): void {
  const container = document.getElementById("book-container") as HTMLElement;
  container.innerHTML = "";

  books.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book-card";
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>By: ${book.author}</p>
      <button data-id="${book.id}">More Info</button>
    `;

    const button = bookDiv.querySelector("button") as HTMLButtonElement;
    button.addEventListener("click", () => {
      displayBookDetails(book);
    });

    container.appendChild(bookDiv);
  });
}

function displayBookDetails(book: Book): void {
  const container = document.getElementById("book-container") as HTMLElement;
  container.innerHTML = "";

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "book-details";
  detailsDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong>Author:</strong> ${book.author}</p>
    <p>${book.description}</p>
    <p><strong>Rating:</strong> ${book.rating}/5</p>
    <button id="back-btn">Back</button>
  `;

  const backButton = detailsDiv.querySelector("#back-btn") as HTMLButtonElement;
  backButton.addEventListener("click", () => {
    init();
  });

  container.appendChild(detailsDiv);
}

function setupSearch(books: Book[]): void {
  const searchInput = document.getElementById(
    "search-input"
  ) as HTMLInputElement;
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    displayBookList(filteredBooks);
  });
}

async function init(): Promise<void> {
  try {
    const books: Book[] = await fetchBooks();
    displayBookList(books);
    setupSearch(books);
  } catch (error) {
    console.error("Error:", error);
  }
}

init();
