// // // // // let name = "Anna";
// // // // // let age = 25;

// // // // // console.log("Jag heter " + name + " och jag är " + age + " år gammal.");



// // // // // function addera(a, b) {
// // // // //     return a + b;
// // // // // }


// // // // // let resultat = addera(5, 3);
// // // // // console.log("Summan är: " + resultat);

// // // // // function kontrolleraTal(num) {
// // // // //     if (num > 0) {
// // // // //         console.log(num + " är positivt.");
// // // // //     } else if (num < 0) {
// // // // //         console.log(num + " är negativt.");
// // // // //     } else {
// // // // //         console.log("Talet är noll.");
// // // // //     }
// // // // // }


// // // // // kontrolleraTal(5);
// // // // // kontrolleraTal(-3);
// // // // // kontrolleraTal(0);


// // // // // function skrivUtTal() {
// // // // //     for (let i = 1; i <= 10; i++) {
// // // // //         console.log(i);
// // // // //     }
// // // // // }


// // // // // skrivUtTal();


// // // // // let frukter = ["Äpple", "Banan", "Apelsin", "Päron", "Mango"];

// // // // // for (let i = 0; i < frukter.length; i++) {
// // // // //     console.log(frukter[i]);
// // // // // }



// // // // // function tillVersaler(str) {
// // // // //     return str.toUpperCase();
// // // // // }


// // // // // let text = "hej världen";
// // // // // let resultatText = tillVersaler(text);
// // // // // console.log(resultatText);




// // // // let nummer = [1, 2, 3, 4, 5]
// // // // let dubblaNummer = nummer.map((num) => num * 2)

// // // // console.log(dubblaNummer);



// // // let tal = [5, 12, 8, 21, 18, 3]

// // // let storaTal = tal.filter((num) => num > 10)

// // // console.log(storaTal);



// // let nummerArray = [1, 2, 3, 4, 5]
// // let totalSumma = nummerArray.reduce(function(acc, num) {
// //     return acc + num
// // }, 0)

// // console.log(totalSumma);



// // let person = {
// //     name: "Anna",
// //     ålder: 25,
// //     yrke: "Lärare"
// // };


// // console.log(person.name, "Är", person.ålder, "Och arbetar som", person.yrke);


// let personer = [
//     { namn: "Anna", ålder: 25 },
//     { namn: "Erik", ålder: 30 },
//     { namn: "Sara", ålder: 22 }
// ]


// let person30 = personer.find(function(person) {
//     return person.ålder === 30
// })

// console.log(person30.namn);
 