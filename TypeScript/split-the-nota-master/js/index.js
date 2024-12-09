document.getElementById("calculateButton").addEventListener("click", () => {
    // hämtar värden från html element
    const sumInput = document.getElementById("sum").value
    const tipInput = document.getElementById("tip").value
    const friendsInput = document.getElementById("numberOfFriends").value

    // konverterar input till nummer
    const sum = parseFloat(sumInput)
    const tip = parseFloat(tipInput)
    const numberOfFriends = parseInt(friendsInput, 10)


    // kontrollera om inmatningarna är giltiga
    if (isNaN(sum) || isNaN(tip) || isNaN(numberOfFriends) || numberOfFriends <= 0) {
        alert("inte siffror")
        return
    }



    // beräkna total och summa per vän
    const calculatedTip = sum + tip
    const total = sum + calculatedTip
    const friendSum = total / numberOfFriends

    // visa resultat i DOM
    document.getElementById("friendSum").innerHTML = `${friendSum} kr`

    // visa och dölj sektioner
    document.getElementById("showSum").classList.remove("hide")
    document.getElementById("inputForm").classList.add("hide")
})