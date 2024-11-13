function readBook(bookTitle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bookTitle === 'JavaScript: The Good Parts') {
                resolve("ja")
            }
            else {
                reject("no")
            }
        }, 2000);
    })
}



readBook('Jd')
    .then((msg) => console.log(msg))
    .catch((error) => console.log(error))