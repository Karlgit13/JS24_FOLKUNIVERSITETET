// Hämta kort och overlay
const cards = document.querySelectorAll<HTMLElement>(".memory-card");
const overlay = document.querySelector<HTMLElement>(".overlay");
const closeButton = document.querySelector<HTMLAnchorElement>(".close");

// Variabler för logik
let hasFlippedCard = false;
let lockBoard = false;
let firstCard: HTMLElement | null = null;
let secondCard: HTMLElement | null = null;

// Funktion för att flippa ett kort
function flipCard(this: HTMLElement) {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // Första klicket
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  // Andra klicket
  secondCard = this;
  checkForMatch();
}

// Kontrollera om två kort matchar
function checkForMatch() {
  if (firstCard?.dataset.card === secondCard?.dataset.card) {
    // Matchning
    disableCards();
    return;
  }

  // Ingen matchning
  unflipCards();
}

// Inaktivera kort som matchar
function disableCards() {
  firstCard?.removeEventListener("click", flipCard);
  secondCard?.removeEventListener("click", flipCard);

  resetBoard();
}

// Vänd tillbaka kort som inte matchar
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard?.classList.remove("flip");
    secondCard?.classList.remove("flip");

    resetBoard();
  }, 1500);
}

// Återställ spelbrädan
function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

// Lägg till klickhändelser på alla kort
cards.forEach((card) => card.addEventListener("click", flipCard));

// Hantera overlay för "You won"
closeButton?.addEventListener("click", () => {
  overlay?.classList.remove("show");
});
