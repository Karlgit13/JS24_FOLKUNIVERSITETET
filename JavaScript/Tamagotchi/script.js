let stats = JSON.parse(localStorage.getItem("petStats")) || { hunger: 50, fun: 50, energy: 50 }


const updatePetColor = () => {

    // uppdaterar status i HTML.
    document.getElementById("hunger").textContent = stats.hunger
    document.getElementById("fun").textContent = stats.fun
    document.getElementById("energy").textContent = stats.energy


    // ändrar färgen baserat på dess status.
    if (stats.hunger < 30 || stats.fun < 30 || stats.energy < 30) {
        document.getElementById("pet").style.background = "red"
    }
    else if (stats.hunger < 60 || stats.fun < 60 || stats.energy < 60) {
        document.getElementById("pet").style.background = "yellow"
    }
    else {
        document.getElementById("pet").style.background = "green"
    }

    // sparar i localstorage.
    localStorage.setItem("petStats", JSON.stringify(stats))
}


const action = (type) => {
    if (type === "feed") {
        // minskar hunger, 100 som maxvärde.
        stats.hunger = Math.min(stats.hunger + 10, 100)
    }

    if (type === "play") {
        // öka glädje och minska energi, max & min värden är 100 och 0.
        stats.fun = Math.min(stats.fun + 10, 100)
        stats.energy = Math.max(stats.energy - 5, 0)
    }

    if (type === "sleep") {
        // öka energi och minska hunger, max/minvärden är 100 och 0.
        stats.energy = Math.min(stats.energy + 15, 100)
        stats.hunger = Math.max(stats.hunger - 5, 0)
    }

    updatePetColor()
}


setInterval(() => {
    stats.hunger = Math.max(stats.hunger - 1, 0)
    stats.fun = Math.max(stats.fun - 1, 0)
    stats.energy = Math.max(stats.energy - 1, 0)
    if (stats.energy === 0 || stats.fun === 0 || stats.hunger === 0) {
        alert("Dittt husdjur har lämnat oss...")
        stats = { hunger: 50, fun: 50, energy: 50 }
        updatePetColor()
    }
}, 3000)


updatePetColor()