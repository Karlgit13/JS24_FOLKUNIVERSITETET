const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const success = Math.random() > 0.5
        if (success) {
            resolve("lyckades")
        }
        else {
            reject("misslyckades")
        }
    }, 2000);
})


myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))