// Skapa en funktion som tar en array som parameter och returnerar summan av alla nummer i arrayen.
// Använd en for-loop för att gå igenom arrayen och summera värdena.
// Tips: Skapa en variabel där du sparar den löpande summan och uppdatera den inuti loopen.


const array = [1, 2, 3, 4, 5, 6]

function summanAvArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}


summanAvArray(array)