const input = document.getElementById("pokemon-input")
const button = document.getElementById("fetch-button")
const resultDiv = document.getElementById("result")


button.addEventListener("click", async () => {
    const pokemonName = input.value
    const response = await fetch("")
    if (response) {
        const data = await response.json()
        console.log(data)
    }
    else {
        console.error("error");

    }
})