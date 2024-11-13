const prepareIngredients = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("preparing ingredients")
            }
            else {
                reject("nått gick fel")
            }
        }, 2000);
    })
}



async function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (prepareIngredients) {
                resolve("water boiling")
            }
            else {
                reject("fel")
            }
        }, 4000);
    })
}



async function cookFood(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (boilWater) {
                resolve("food cooking")
            }
            else {
                reject("fel")
            }
        }, 5000);
    })
}



async function serveFood(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cookFood) {
                resolve("serving food")
            }
            else {
                reject("fel")
            }
        }, 1000);
    })
}


const cookDinner = async () => {
    console.log(await prepareIngredients())
    console.log(await boilWater())
    console.log(await cookFood())
    console.log(await serveFood());
}


cookDinner()