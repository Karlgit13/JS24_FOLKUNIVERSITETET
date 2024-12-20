// importerar "Book" interface
import { Book } from "./interfaces";

// api nyckel
const API_URL =
  "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";


// async funktion för hämta data från API med api nyckel
// lägger till Promise som typ med book-array 
async function fetchBooks(): Promise<Book[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  // förväntar mig att få en array tillbaka med Book interface egenskaperna
  const books: Book[] = await response.json();
  console.log(books);
  return books;
}

function displayBookList(books: Book[]): void {
  const container = document.getElementById("book-container") as HTMLElement;
  container.innerHTML = "";

  books.forEach((book) => {
    console.log(book);
    const bookDiv = document.createElement("div");
    bookDiv.className = "book-card";
    bookDiv.style.background = book.color;
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>By: ${book.author}</p>
    `;

    bookDiv.addEventListener("click", () => {
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
  detailsDiv.style.background = book.color;
  detailsDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong>By:</strong> ${book.author}</p>
    <p><strong>Audience:</strong> ${book.audience}</p>
    <p><strong>Id:</strong> ${book.id}</p>
    <p><strong>Pages:</strong> ${book.pages}</p>
    <p><strong>Publisher:</strong> ${book.pulisher}</p>
    <p><strong>Year:</strong> ${book.year}</p>
    <p><strong>Plot:</strong> ${book.plot}</p>
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
