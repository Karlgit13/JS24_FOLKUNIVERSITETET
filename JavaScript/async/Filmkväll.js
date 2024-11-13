async function makePopcorn(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("pop rdy")
            }
            else {
                reject("pop not rdy")
            }
        }, 2000);
    })
}


async function getDrinks(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (makePopcorn) {
                resolve("drinks ready")
            }
            else {
                reject("not rdy")
            }
        }, 1000);
    })
}


async function chooseMovie(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (getDrinks) {
                resolve("movie selected")
            }
            else {
                reject("error")
            }
        }, 3000);
    })
}




Promise.all([makePopcorn(), getDrinks(), chooseMovie()])
    .then((messages) => {
        console.log(messages.join(", "))
        console.log("lets start movie night")
    })