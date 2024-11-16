let stats = JSON.parse(localStorage.getItem("petStats")) || { hunger: 50, fun: 50, energy: 50 };

const API_KEY = 'oAP7PRe0r8rq7SOapEFzTBZpAMYLwfC7'; // Lägg till din egen API-nyckel

const updatePetColor = () => {
    document.getElementById("hunger").textContent = stats.hunger;
    document.getElementById("fun").textContent = stats.fun;
    document.getElementById("energy").textContent = stats.energy;

    // Ändra färg baserat på status.
    if (stats.hunger < 30 || stats.fun < 30 || stats.energy < 30) {
        document.getElementById("pet").style.background = "red";
    } else if (stats.hunger < 60 || stats.fun < 60 || stats.energy < 60) {
        document.getElementById("pet").style.background = "yellow";
    } else {
        document.getElementById("pet").style.background = "green";
    }

    localStorage.setItem("petStats", JSON.stringify(stats));
};

const action = (type) => {
    if (type === "feed") {
        stats.hunger = Math.min(stats.hunger + 10, 100);
    }
    if (type === "play") {
        stats.fun = Math.min(stats.fun + 10, 100);
        stats.energy = Math.max(stats.energy - 5, 0);
    }
    if (type === "sleep") {
        stats.energy = Math.min(stats.energy + 15, 100);
        stats.hunger = Math.max(stats.hunger - 5, 0);
    }
    updatePetColor();
};

setInterval(() => {
    stats.hunger = Math.max(stats.hunger - 1, 0);
    stats.fun = Math.max(stats.fun - 1, 0);
    stats.energy = Math.max(stats.energy - 1, 0);
    if (stats.energy === 0 || stats.fun === 0 || stats.hunger === 0) {
        alert("Ditt husdjur har lämnat oss...");
        stats = { hunger: 50, fun: 50, energy: 50 };
        updatePetColor();
    }
}, 3000);




const getWeather = async () => {
    const city = document.getElementById("cityInput").value
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${API_KEY}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        const weatherDetails = data.data.values
        const temperature = parseInt(weatherDetails.temperature)
        const precipitationType = weatherDetails.precipitationType



        let message = `Current temperature in ${city} is ${temperature}C `
        if (precipitationType === 1) {
            message += "It's raining. Fun will decrease faster."
            stats.fun = Math.max(stats.fun - 5, 0)
        }
        else if (temperature > 25) {
            message += "It's hot and sunny! fun decreases slower"
            stats.fun = Math.min(stats.fun + 5, 100)
        }
        else {
            message += "weather is neutral"
        }

        document.getElementById("weatherMessage").textContent = message


        if (temperature < 0) {
            document.body.style.backgroundColor = "4A6FA5"
        }
        else if (temperature > 20) {
            document.body.style.backgroundColor = "FFD700"
        }
        else {
            document.body.style.backgroundColor = "#87CEEB"
        }

        updatePetColor()
    }
    catch (error) {
        console.error(error)
    }

}