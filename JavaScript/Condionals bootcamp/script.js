// // // // // // // // // let a = 10;
// // // // // // // // // let b = 20;


// // // // // // // // // if (a > b) {
// // // // // // // // //     console.log(a, " är större");
// // // // // // // // // } else {
// // // // // // // // //     console.log(a, "är inte större än", b);
// // // // // // // // // }


// // // // // // // // let a = 'apple';
// // // // // // // // let b = 'pear';

// // // // // // // // if (a === b) {
// // // // // // // //     console.log("lika");
// // // // // // // // } else if (a !== b) {
// // // // // // // //     console.log("inte lika");
// // // // // // // // }



// // // // // // // let number = prompt("skriv in din ålder")

// // // // // // // console.log(number);


// // // // // // // function biggestNumber(num1, num2) {
// // // // // // //     if (num1 > num2) {
// // // // // // //         console.log(num1, "är större än", num2);
// // // // // // //     } else {
// // // // // // //         console.log(num2, "är större än", num1);

// // // // // // //     }
// // // // // // // }

// // // // // // // biggestNumber(15, 10)


// // // // // // // const oddOrEven = (number) => {
// // // // // // //     if (number % 2 === 0) {
// // // // // // //         console.log(number + 'är jämt')
// // // // // // //     } else {
// // // // // // //         console.log(number + "är udda");
// // // // // // //     }
// // // // // // // }

// // // // // // // oddOrEven(2)


// // // // // // const helix = (height) => {
// // // // // //     if (height >= 150) {
// // // // // //         return true
// // // // // //     } else {
// // // // // //         return false
// // // // // //     }
// // // // // // }

// // // // // // let person = 155
// // // // // // let resultat = helix(person)
// // // // // // console.log(resultat);


// // // // // // const kanÅkaBalder = (åkband) => {
// // // // // //     if (åkband === "large" || åkband === "platinum") {
// // // // // //         return true
// // // // // //     } else {
// // // // // //         return false
// // // // // //     }
// // // // // // }

// // // // // // let mittÅkband = "platinum"
// // // // // // let resultat = kanÅkaBalder(mittÅkband)
// // // // // // console.log(resultat);


// // // // // function beräknaBMI(längd, vikt) {
// // // // //     let längdSomMeter = längd / 100
// // // // //     let BMI = vikt / (längdSomMeter * längdSomMeter)

// // // // //     if (BMI < 18.5) {
// // // // //         return "Undervikt"
// // // // //     }
// // // // //     else if (BMI >= 18.5 && BMI <= 25) {
// // // // //         return "normalvikt"
// // // // //     }
// // // // //     else if (BMI >= 25 && BMI <= 30) {
// // // // //         return "övervikt"
// // // // //     }
// // // // //     else {
// // // // //         return "fetma"
// // // // //     }
// // // // // }



// // // // // let resultat = beräknaBMI(180, 95)
// // // // // console.log(resultat);


// // // // function getWeekday(num) {
// // // //     switch (num) {
// // // //         case 1:
// // // //             return "Måndag";
// // // //         case 2:
// // // //             return "Tisdag";
// // // //         case 3:
// // // //             return "Onsdag";
// // // //         case 4:
// // // //             return "Torsdag";
// // // //         case 5:
// // // //             return "Fredag";
// // // //         case 6:
// // // //             return "Lördag";
// // // //         case 7:
// // // //             return "Söndag";
// // // //         default:
// // // //             return false;
// // // //     }
// // // // }

// // // // let nummer = parseInt(prompt("Ange ett nummer (1-7):"))
// // // // let resultat = getWeekday(nummer)
// // // // console.log(resultat);



// // function vilkenMånad(num) {
// //     switch (num) {
// //         case 1:
// //             return "Januari";
// //         case 2:
// //             return "Februari";
// //         case 3:
// //             return "Mars";
// //         case 4:
// //             return "April";
// //         case 5:
// //             return "Maj";
// //         case 6:
// //             return "Juni";
// //         case 7:
// //             return "Juli";
// //         case 8:
// //             return "Augusti";
// //         case 9:
// //             return "September";
// //         case 10:
// //             return "Oktober"
// //         case 11:
// //             return "November"
// //         case 12:
// //             return "December"
// //     }
// // }

// // // let resultat = vilkenMånad(11)
// // // console.log(resultat);


// // let age = 18;

// // const isAdultOrNot = (age) => {
// //     if (age >= 18) {
// //         return "Vuxen"
// //     }
// //     else {
// //         return "minderårig"
// //     }
// // }

// // let resultat = isAdultOrNot(age)
// // console.log(resultat);


// // let number = -5

// // function positiveNegativeOrZero(num) {
// //     if (num > 0) {
// //         return "Positive"
// //     } else {
// //         return "Negative"
// //     }
// // }

// // let resultat = positiveNegativeOrZero(number)
// // console.log(resultat);




// function passOrFail(score) {
//     if (score >= 60) {
//         return "Godkänd"
//     } else {
//         return "Icke godkänd"
//     }
// }

// let score = 75
// let resultat = passOrFail(score)
// console.log(resultat);



function isMemberCheck(customerType) {
    if (customerType === "member") {
        return "Eligible"
    }
    else {
        return "not eligible"
    }
}

let kund = "non-member"
let resultat = isMemberCheck(kund)
console.log(resultat);
