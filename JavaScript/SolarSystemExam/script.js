// HÄMTA API NYKEL
const getApiKey = async () => {
    const response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
        method: "POST"
    })
    const data = await response.json()
    console.log(data)
    return data.key
}

// HÄMTA BODIES
const getBodies = async (apiKey) => {
    const response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: "GET",
        headers: { "x-zocom": apiKey }
    })
    return response.json()
}

// INITIERA KEY OCH BODIES
const init = async () => {
    try {
        const apiKey = await getApiKey()
        const bodiesData = await getBodies(apiKey)
        displayPlanets(bodiesData.bodies);
        console.log(bodiesData)
    }
    catch (error) {
        console.error("error fetching: ", error)
    }
}


// VISA PLANETER
const displayPlanets = (bodies) => {
    const container = document.getElementById("planet-container")
    bodies.forEach(body => {
        if (body.type === "planet") {
            const planetDiv = document.createElement("div")
            planetDiv.classList.add("planet")
            planetDiv.innerText = body.name
            planetDiv.addEventListener("click", () => showOverlay(body))
            container.appendChild(planetDiv)
            console.log("Visar planet:", body.name)  // Lägg till denna rad
        }
    })
}




// VISA OVERLAY MED INFO OM PLANETEN
const showOverlay = (body) => {
    const overlay = document.getElementById("overlay")
    overlay.innerHTML = `
        <h2>${body.name} (${body.latinName})</h2>
        <p>${body.desc}</p>
        <p><strong>Omkrets:</strong> ${body.circumference} km</p>
        <p><strong>Dygnets längd:</strong> ${body.rotation} jorddygn</p>
        <p><strong>Temperatur:</strong> Dag: ${body.temp.day}°C, Natt: ${body.temp.night}°C</p>
        <button onclick="closeOverlay()">Stäng</button>
    `
    overlay.classList.remove("hidden")
}


// STÄNG OVERLAY
const closeOverlay = () => {
    document.getElementById("overlay").classList.add("hidden")
}

init()