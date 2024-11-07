



// Alex
// variabler
const words = ["javascript", "programmering", "kodning", "dator", "utveckling"];
let selectedWord = words[Math.floor(Math.random() * words.length)]
let guessedLetters = []
let incorrectLetters = []
let maxErrors = 6
let errors = 0


// html element
const wordDisplay = document.getElementById("word-display")
const incorrectLettersDisplay = document.getElementById("incorrect-letters")
const guessInput = document.getElementById("guess-input")
const guessBtn = document.getElementById("guess-btn")















// LUM
// funktion för uppdatera ordet som visas på skärmen
const updateWordDisplay = () => {
    const displayWord = selectedWord
        .split("")
        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
        .join(" ")
    wordDisplay.textContent = displayWord
}


// kontrollera gissningen
const handleGuess = () => {
    const guess = guessInput.value.toLowerCase()
    guessInput.value = ""

    if (guess && !guessedLetters.includes(guess) && !incorrectLetters.includes(guess)) {
        if (selectedWord.includes(guess)) {
            guessedLetters.push(guess)
        } else {
            incorrectLetters.push(guess)
            errors++
            updateHangmanImage()
        }
        updateWordDisplay()
        updateIncorrectLettersDisplay()
        checkGameStatus()
    }
}





















// Robin
// uppdaterar visningen av felaktiga bokstäver
const updateIncorrectLettersDisplay = () => {
    incorrectLettersDisplay.textContent = `Felaktiga bokstäver: ${incorrectLetters.join(", ")}`
}



// kontrollera om spelaren har vunnit eller förlorat
const checkGameStatus = () => {
    if (selectedWord.split("").every(letter => guessedLetters.includes(letter))) {
        alert("grattis du vann!")
        resetGame()
    } else if (errors >= maxErrors) {
        alert(`Du förlorade! ordet var ${selectedWord}`)
        resetGame()
    }
}












//kalle 
// uppdaterar hangman SVG-bilden beroende på fel
function updateHangmanImage() {
    const parts = ["head", "body", "arms", "legs"];
    if (errors > 0 && errors <= maxErrors) {
        document.getElementById(parts[errors - 1]).style.display = "block";
    }
}





// nollställer spelet
const resetGame = () => {
    selectedWord = words[Math.floor(Math.random() * words.length)]
    guessedLetters = []
    incorrectLetters = []
    errors = 0
    updateWordDisplay()
    updateIncorrectLettersDisplay()
    document.querySelectorAll("path, ellipse").forEach(part => (part.style.display = "none"))
    document.getElementById("ground").style.display = "block";
}



guessBtn.addEventListener("click", handleGuess)
updateWordDisplay()
resetGame()