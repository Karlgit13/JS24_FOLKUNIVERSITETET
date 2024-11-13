const brewCoffe = (coffeType) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (coffeType === "espresso") {
                resolve("ready")
            }
            else {
                reject("not ready")
            }
        }, 2000);
    })
}


brewCoffe("espresso")
    .then((msg) => console.log(msg))
    .catch((error) => console.log(error))