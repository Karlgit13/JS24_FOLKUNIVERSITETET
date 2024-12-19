const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const bookContainer = document.getElementById("book-container")

const apiURL = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"

const fetchBooks = async () => {
    const response = await fetch(apiURL)
    if (!response.ok) {
        throw new Error("failed fetching........")
    }
    const data = await response.json()
    console.log(data)
    return data
}

const displayBookList = (books) => {
    bookContainer.innerHTML = ""

    books.forEach((book) => {
        const bookDiv = document.createElement("div")
        bookDiv.className = "book-card"
        bookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>By: ${book.author}</p>
        <button data.id="${book.id}">More Info</button>
        `

        bookDiv.querySelector("button").addEventListener("click", () => {
            displayBookDetails(book)
        })

        bookContainer.appendChild(bookDiv)
    })
}


const displayBookDetails = (book) => {
    bookContainer.innerHTML = ""

    const detailsDiv = document.createElement("div")
    detailsDiv.className = "book-details"
    detailsDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p><strong>Author:</strong> ${book.author}</p>
    <p>${book.description}</p>
    <p><strong>Rating:</strong> ${book.rating}/5</p>
    <button id="back-btn">Back</button>
    `

    detailsDiv.querySelector("#back-btn").addEventListener("click", () => {
        init()
    })

    bookContainer.appendChild(detailsDiv)
}


const setupSearch = (books) => {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase()
        const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))
    })
    displayBookList(filteredBooks)
}


const init = async () => {
    try {
        const books = await fetchBooks()
        displayBookList(books)
        setupSearch(books)
    }
    catch (error) {
        console.error("error:", error)
    }
}

init()