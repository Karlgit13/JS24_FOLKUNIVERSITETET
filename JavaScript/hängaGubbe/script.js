// Array av möjliga ord att slumpa fram som användaren ska gissa på
const words = ["javascript", "programming", "hangman", "developer"];

// Variabler för att lagra spelets nuvarande status
let selectedWord;        // Ordet som spelaren ska gissa
let guessedLetters;      // Array för lagring av rätt gissade bokstäver
let wrongGuesses;        // Array för lagring av felaktiga gissningar
let maxWrongGuesses;     // Max antal felaktiga gissningar innan spelet är över

// Startar ett nytt spel med initiala värden
function startGame() {
    // Välj ett slumpmässigt ord från 'words'-arrayen
    selectedWord = words[Math.floor(Math.random() * words.length)];

    // Återställer listorna för gissade bokstäver och felaktiga gissningar
    guessedLetters = [];
    wrongGuesses = [];

    // Sätter max antal felaktiga gissningar (t.ex. 6)
    maxWrongGuesses = 6;

    // Visa det tomma ordet och uppdatera felaktiga gissningar
    displayWord();
    displayWrongGuesses();

    // Döljer "Spela igen"-knappen och rensar eventuellt meddelande från förra spelet
    document.getElementById("play-again").style.display = "none";
    document.getElementById("game-message").innerText = "";
}

// Visar ordet med rätt gissade bokstäver och "_" för de som ännu inte gissats
function displayWord() {
    const wordContainer = document.getElementById("word-container");

    // Skapar en sträng där rätt gissade bokstäver visas och övriga är "_"
    wordContainer.innerHTML = selectedWord
        .split('')  // Delar upp ordet i en array med enskilda bokstäver
        .map(letter => (guessedLetters.includes(letter) ? letter : '_')) // Visar bokstav om den är gissad, annars "_"
        .join(' ');  // Slår ihop arrayen till en sträng med mellanslag mellan varje bokstav
}

// Visar de felaktiga gissningarna och antal återstående försök
function displayWrongGuesses() {
    document.getElementById("wrong-guesses").innerText = `Felaktiga gissningar: ${wrongGuesses.join(', ')}`;
}

// Hanterar spelarens gissning när en bokstav skrivs in
function handleGuess(letter) {
    // Kolla om bokstaven redan har gissats (antingen rätt eller fel), och ignorera om så är fallet
    if (guessedLetters.includes(letter) || wrongGuesses.includes(letter)) return;

    // Om bokstaven finns i ordet, lägg till den till listan av rätt gissningar
    if (selectedWord.includes(letter)) {
        guessedLetters.push(letter);

        // Kontrollera om alla bokstäver är gissade - om ja, visa vinstmeddelande
        if (selectedWord.split('').every(letter => guessedLetters.includes(letter))) {
            document.getElementById("game-message").innerText = "Du vann!";
            document.getElementById("play-again").style.display = "block"; // Visa "Spela igen"-knappen
        }
    } else {
        // Om bokstaven inte finns i ordet, lägg till den till listan av felaktiga gissningar
        wrongGuesses.push(letter);

        // Kolla om spelaren har nått max antal felaktiga gissningar och förlorar spelet
        if (wrongGuesses.length >= maxWrongGuesses) {
            document.getElementById("game-message").innerText = `Du förlorade! Rätt ord var: ${selectedWord}`;
            document.getElementById("play-again").style.display = "block"; // Visa "Spela igen"-knappen
        }
    }

    // Uppdatera ordet och felaktiga gissningar efter varje gissning
    displayWord();
    displayWrongGuesses();
}

// Lägger till en händelse för tangenttryck (för att hantera spelarens gissning)
document.addEventListener("keydown", (event) => {
    const letter = event.key.toLowerCase(); // Hämtar nedtryckt tangent och omvandlar till liten bokstav

    // Kontrollera om tangenten är en bokstav (a-z) innan vi hanterar gissningen
    if (/^[a-z]$/.test(letter)) handleGuess(letter);
});

// Lägger till en händelse för "Spela igen"-knappen som startar om spelet
document.getElementById("play-again").addEventListener("click", startGame);

// Startar spelet när sidan laddas
startGame();
