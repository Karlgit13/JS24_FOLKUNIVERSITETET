const letsDance = (danceStyle) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (danceStyle === "polka") {
                resolve("Yes")
            } else {
                reject("no")
            }
        }, 2000);
    })
}


letsDance("polka")
    .then((resp) => console.log(resp))
    .catch((diss) => console.log(diss))






const letsDance2 = (danceStyle) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (danceStyle === "polka") {
                resolve("yes")
            } else {
                reject("no")
            }
        }, 2000);
    })
}


letsDance2("waltz")
    .then((response) => console.log(response))
    .catch((error) => console.error(error))