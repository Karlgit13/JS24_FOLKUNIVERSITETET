var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
function fetchBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }
        const books = yield response.json();
        console.log(books);
        return books;
    });
}
function displayBookList(books) {
    const container = document.getElementById("book-container");
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
function displayBookDetails(book) {
    const container = document.getElementById("book-container");
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
    const backButton = detailsDiv.querySelector("#back-btn");
    backButton.addEventListener("click", () => {
        init();
    });
    container.appendChild(detailsDiv);
}
function setupSearch(books) {
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query));
        displayBookList(filteredBooks);
    });
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const books = yield fetchBooks();
            displayBookList(books);
            setupSearch(books);
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
}
init();
export {};
