// // // // // // // Bigger: Check if a is greater than b
// // // // // // let a = 10;
// // // // // // let b = 20;

// // // // // // let biggerResult = document.getElementById("bigger-result");

// // // // // // if (a > b) {
// // // // // //     biggerResult.innerHTML = "a is bigger than b";
// // // // // // } else {
// // // // // //     biggerResult.innerHTML = "a is not bigger than b";
// // // // // // }


// // // // // let a = "apple"
// // // // // let b = "pear"

// // // // // let result = document.getElementById("equals-result")

// // // // // if (a === b) {
// // // // //     result.innerHTML = "true"
// // // // // }
// // // // // else {
// // // // //     result.innerHTML = "false"
// // // // // }



// // // // function biggestNumber(a, b) {
// // // //     if (a > b) {
// // // //         console.log(a + "är större");

// // // //     }
// // // //     else {
// // // //         console.log(b + "är större");

// // // //     }
// // // // }

// // // // biggestNumber(5, 10)



// // // const number = 29

// // // function evenOrOdd(number) {
// // //     if (number % 2 === 0) {
// // //         return "even"
// // //     }
// // //     else {
// // //         return "odd"
// // //     }
// // // }

// // // console.log(evenOrOdd(number))


// // let height = 180

// // const Lisebergsvakten = (height) => {

// //     if (height >= 150) {
// //         return "true"
// //     }
// //     else {
// //         return "false"
// //     }

// // }


// // console.log(Lisebergsvakten(height));











// const Lisebergsvakten2 = (åkband) => {
//     if (åkband === "large" || åkband === "platinum") {
//         return "true"
//     }
//     else {
//         return "false"
//     }
// }

// let åkband = "large"

// console.log(Lisebergsvakten2(åkband));





function BMIkalkylator(vikt, längd) {
    let längdIMeter = längd / 100
    let BMI = vikt / (längdIMeter * längdIMeter)

    if (BMI <= 18.5) {
        return "Undervikt"
    }
    else if (BMI > 18.5 && BMI <= 25) {
        return "Normalvikt"
    }
    else if (BMI >= 25 && BMI <= 30) {
        return "Övervikt"
    }
    else {
        return "Fetma"
    }
}

let vikt = 110
let längd = 180

console.log(BMIkalkylator(vikt, längd));
