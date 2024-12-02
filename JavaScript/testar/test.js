// // 1. Skapa en array med namn på några frukter.
// // 2. Använd .map() för att omvandla varje frukt till versaler med hjälp av .toUpperCase().
// // 3. Logga den nya arrayen till konsolen.

// const frukter = ["äpple", "banan", "kiwi"];
// // Din kod här
// const versaler = frukter.map((frukt) => {
//     return frukt.toUpperCase()
// })

// console.log(versaler);




// // 1. Skapa en array med olika ord.
// // 2. Använd .filter() för att skapa en ny array som bara innehåller ord med fler än 4 bokstäver.
// // 3. Logga resultatet till konsolen.

// const ord = ["sol", "måne", "universum", "sjö"];
// // Din kod här
// const newOrd = ord.filter((word) => {
//     if (word.length > 4) {
//         return word
//     }
// })
// console.log(newOrd)


// // 1. Skapa en array med några siffror.
// // 2. Använd .reduce() för att summera alla siffror i arrayen.
// // 3. Logga summan till konsolen.

// const siffror = [5, 10, 15, 20];
// // Din kod här
// const summeradeSiffror = siffror.reduce((acc, val) => {
//     return acc + val
// })
// console.log(summeradeSiffror);


// // 1. Skapa en sträng med en mening.
// // 2. Använd .replace() för att ersätta ett specifikt ord i meningen.
// // 3. Dela sedan upp meningen i en array av ord med hjälp av .split().
// // 4. Logga den resulterande arrayen till konsolen.

// const mening = "JavaScript är roligt att lära sig";
// // Din kod här
// const nyMening = mening.replace("roligt", "utmanande")
// const ordTillArrray = nyMening.split(" ")
// console.log(ordTillArrray);



// // 1. Skapa en array med objekt som representerar olika personer (namn och ålder).
// // 2. Använd .find() för att hitta personen som är äldre än 30 år.
// // 3. Använd .findIndex() för att hitta indexet för den personen i arrayen.
// // 4. Logga både personen och indexet till konsolen.

// const personer = [
//     { namn: "Anna", ålder: 25 },
//     { namn: "Bengt", ålder: 35 },
//     { namn: "Cecilia", ålder: 28 }
// ];
// // Din kod här
// const findPersonOver30 = personer.find((person) => {
//     return person.ålder > 30
// })
// console.log(findPersonOver30);

// const indexPerson = personer.findIndex((person) => {
//     return person.ålder > 30
// })
// console.log(indexPerson);



// 1. Skapa två arrayer med siffror.
// 2. Använd .concat() för att slå ihop arrayerna till en enda array.
// 3. Sortera den nya arrayen i stigande ordning med .sort().
// 4. Logga den sorterade arrayen till konsolen.

const array1 = [3, 8, 1];
const array2 = [5, 2, 7];
// Din kod här
const newArray = array1.concat(array2)

newArray.sort((a, b) => {
    return a - b
})

console.log(newArray);



// 1. Skapa en sträng med ett valfritt ord.
// 2. Använd .charAt() för att hämta den tredje bokstaven i ordet.
// 3. Använd .charCodeAt() för att få ASCII-koden för den bokstaven.
// 4. Logga både bokstaven och dess ASCII-kod till konsolen.

const ord2 = "JavaScript";
// Din kod här
console.log(ord2.charAt(2).charCodeAt())