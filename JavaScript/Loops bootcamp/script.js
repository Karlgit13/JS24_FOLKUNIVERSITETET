// // // // // // // // for (let i = 0; i <= 1000; i++) {
// // // // // // // //     console.log(i);

// // // // // // // // }



// // // // // // // for (let i = 100; i >= 0; i--) {
// // // // // // //     console.log(i);

// // // // // // // }



// // // // // // // let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

// // // // // // // for (let i = 0; i < fruits.length; i++) {
// // // // // // //     console.log(fruits[i]);

// // // // // // // }


// // // // // // let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

// // // // // // for (let i = 0; i < fruits.length; i++) {
// // // // // //     console.log(i, fruits[i]);

// // // // // // }




// // // // // let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

// // // // // for (let thing of things) {
// // // // //     console.log(thing)
// // // // // }




// // // // let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

// // // // things.forEach((thing) => {
// // // //     console.log(thing);

// // // // })

// // // // things.forEach((thing, index) => {
// // // //     console.log(index, thing);

// // // // })

// // // let count = 1;

// // // while (count <= 1000) {
// // //     console.log(count);
// // //     count++
// // // }




// // let suits = ["hjärter", "ruter", "klöver", "spader"]
// // let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// // let deck = []

// // for (let suit of suits) {
// //     for (let value of values) {
// //         let card = `${suit} ${value}`
// //         deck.push(card)
// //     }
// // }
// // console.log(deck);



// let friends = [
//     {
//         name: 'Sixten',
//         likes: [
//             'bananas',
//             'strawberries',
//             'blueberries'
//         ]
//     },
//     {
//         name: 'Khalid',
//         likes: [
//             'papaya',
//             'pear',
//             'pineapple'
//         ]
//     },
//     {
//         name: 'Lisa',
//         likes: [
//             'raspberries',
//             'watermelon',
//             'apple'
//         ]
//     }
// ]

// friends.forEach((friend) => {
//     console.log(`${friend.name} favorite fruits`);
//     friend.likes.forEach((fruit) => {
//         console.log(fruit);

//     })
// })



// script.js
const passwordList = require('./common-passwords.js'); // Hämta lösenord från filen

// Slumpa ett lösenord och spara det i 'topsecret'
let topsecret = passwordList[Math.floor(Math.random() * passwordList.length)];

// Brute force: loopa genom alla lösenord och testa mot 'topsecret'
let matched_password = null;
for (let password of passwordList) {
    if (password === topsecret) {
        matched_password = password;
        break; // Avsluta loopen när vi hittat en match
    }
}

// Logga ut det matchande lösenordet
if (matched_password) {
    console.log(`Aha! I found you, ${matched_password}.`);
} else {
    console.log("No match found.");
}
