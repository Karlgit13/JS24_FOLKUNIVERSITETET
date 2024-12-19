// Typdefinition för tärningsobjektet
interface Dice {
    sides: number;
    throw: () => number;
}

// Tärningsobjekt med egenskap och metod
const dice: Dice = {
    sides: 6,
    throw: function (): number {
        return Math.floor(Math.random() * this.sides) + 1;
    },
};

// Hämta element från DOM och använd typer
const rollBtn = document.getElementById("roll-btn") as HTMLButtonElement;
const diceSides = document.getElementById("dice-sides") as HTMLSelectElement;
const diceContainer = document.getElementById("dice-container") as HTMLDivElement;

// Kontrollera att element finns (för säkerhet)
if (!rollBtn || !diceSides || !diceContainer) {
    throw new Error("Något element saknas i DOM!");
}

// Funktion för att kasta 5 tärningar
function rollFiveDice(): void {
    diceContainer.innerHTML = ""; // Töm tidigare resultat

    // Uppdatera antal sidor baserat på användarens val
    dice.sides = parseInt(diceSides.value);

    // Slå 5 tärningar och visa dem
    for (let i = 0; i < 5; i++) {
        const result: number = dice.throw();

        // Skapa en ny tärningsruta
        const diceElement: HTMLDivElement = document.createElement("div");
        diceElement.classList.add("dice");
        diceElement.textContent = result.toString();

        // Lägg till i dice-container
        diceContainer.appendChild(diceElement);
    }
}

// Event: När knappen klickas
rollBtn.addEventListener("click", rollFiveDice);
