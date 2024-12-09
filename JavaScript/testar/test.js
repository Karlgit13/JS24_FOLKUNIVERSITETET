// Du har en array med namn. Din uppgift är att:
// 1. Konvertera alla namn till versaler (stora bokstäver).
// 2. Filtrera ut namn som är kortare än 5 bokstäver.
// 3. Sortera den resulterande listan i omvänd alfabetisk ordning.
// Använd .map(), .filter() och .sort().

const namnLista = ["Anna", "Björn", "Sofia", "Eva", "Gustav", "Bo"];

// Skriv din lösning här:
const lösning = namnLista.filter((name) => {
    if (name.length < 5) {
        return name.toUpperCase()
    }
})

console.log(lösning);




// Du har en array av produktobjekt med namn och priser.
// Din uppgift är att:
// 1. Höja priset på alla produkter med 20%.
// 2. Hitta den dyraste produkten efter prishöjningen.
// Använd .map(), .reduce() och Math.max().

const produkter = [
    { namn: "Bok", pris: 100 },
    { namn: "Penna", pris: 20 },
    { namn: "Dator", pris: 8000 },
    { namn: "Mus", pris: 300 }
];

// Skriv din lösning här:




// Du har en sträng med en mening.
// Din uppgift är att:
// 1. Dela upp strängen i ord.
// 2. Ersätta alla förekomster av ordet "JavaScript" med "JS".
// 3. Sätt ihop orden igen till en ny sträng.
// Använd .split(), .map(), .replace() och .join().

const text = "JavaScript är ett kraftfullt programmeringsspråk. JavaScript används överallt.";

// Skriv din lösning här:
