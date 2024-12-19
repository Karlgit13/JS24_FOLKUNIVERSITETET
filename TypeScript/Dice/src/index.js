// Tärningsobjekt med egenskap och metod
var dice = {
    sides: 6,
    throw: function () {
        return Math.floor(Math.random() * this.sides) + 1;
    },
};
// Hämta element från DOM och använd typer
var rollBtn = document.getElementById("roll-btn");
var diceSides = document.getElementById("dice-sides");
var diceContainer = document.getElementById("dice-container");
// Kontrollera att element finns (för säkerhet)
if (!rollBtn || !diceSides || !diceContainer) {
    throw new Error("Något element saknas i DOM!");
}
// Funktion för att kasta 5 tärningar
function rollFiveDice() {
    diceContainer.innerHTML = ""; // Töm tidigare resultat
    // Uppdatera antal sidor baserat på användarens val
    dice.sides = parseInt(diceSides.value);
    // Slå 5 tärningar och visa dem
    for (var i = 0; i < 5; i++) {
        var result = dice.throw();
        // Skapa en ny tärningsruta
        var diceElement = document.createElement("div");
        diceElement.classList.add("dice");
        diceElement.textContent = result.toString();
        // Lägg till i dice-container
        diceContainer.appendChild(diceElement);
    }
}
// Event: När knappen klickas
rollBtn.addEventListener("click", rollFiveDice);
