const myPromise = new Promise((resolve, reject) => {
    console.log("promise status: <pending>");
    setTimeout(() => {
        const success = Math.random() > 0.5
        if (success) {
            resolve("<resolved>")
        } else {
            reject("rejected")
        }
    }, 2000);
})

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))