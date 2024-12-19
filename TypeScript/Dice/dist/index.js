const dice = {
    sides: 6,
    throw: function () {
        return Math.floor(Math.random() * this.sides) + 1
    }
}


const rollBtn = document.getElementById("roll-btn")
const diceSides = document.getElementById("dice-sides")
const diceResult = document.getElementById("dice-result")
const diceContainer = document.getElementById("dice-container")

function rollFiveDice() {
    diceContainer.innerHTML = ""

    dice.sides = parseInt(diceSides.value)

    for (let i = 0; i < 5; i++) {
        const result = dice.throw()
        const diceElement = document.createElement("div")
        diceElement.classList.add("dice")
        diceElement.textContent = result
        diceContainer.appendChild(diceElement)
    }
}


rollBtn.addEventListener("click", rollFiveDice)