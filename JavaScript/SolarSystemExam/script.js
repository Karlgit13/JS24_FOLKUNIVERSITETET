// IMPORTERAR FETCH FUNKTIONER
import { getApiKey, getBodies } from "./modules/api.js";
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
            planetDiv.addEventListener("click", () => showOverlay(body))
            container.appendChild(planetDiv)
            console.log("Visar planet:", body.name)


            if (body.name === "Merkurius") {
                planetDiv.style.backgroundImage = `url('assets/merkurius.jpeg')`;
                planetDiv.style.backgroundSize = "cover";     // Täcker hela div:en
                planetDiv.style.backgroundPosition = "center"; // Centrerar bilden
            } else if (body.name === "Venus") {
                planetDiv.style.backgroundImage = `url('assets/venus.webp')`;
                planetDiv.style.backgroundSize = "cover";     // Täcker hela div:en
                planetDiv.style.backgroundPosition = "center"; // Centrerar bilden
            }
            else if (body.name === "Jorden") {
                planetDiv.style.backgroundImage = `url('assets/jorden.webp')`;
                planetDiv.style.backgroundSize = "cover";     // Täcker hela div:en
                planetDiv.style.backgroundPosition = "center"; // Centrerar bilden
            }
            else if (body.name === "Mars") {
                planetDiv.style.backgroundImage = `url('assets/mars.webp')`;
                planetDiv.style.backgroundSize = "cover";     // Täcker hela div:en
                planetDiv.style.backgroundPosition = "center"; // Centrerar bilden
            }
            else if (body.name === "Jupiter") {
                planetDiv.style.backgroundImage = `url('assets/jupiter.webp')`;
                planetDiv.style.backgroundSize = "cover";     // Täcker hela div:en
                planetDiv.style.backgroundPosition = "center"; // Centrerar bilden
            }
            else if (body.name === "Saturnus") {
                planetDiv.style.backgroundImage = `url('assets/saturnus.webp')`;
                planetDiv.style.backgroundSize = "cover";     // Täcker hela div:en
                planetDiv.style.backgroundPosition = "center"; // Centrerar bilden
            }
            else if (body.name === "Uranus") {
                planetDiv.style.backgroundImage = `url('assets/uranus.webp')`;
                planetDiv.style.backgroundSize = "cover";     // Täcker hela div:en
                planetDiv.style.backgroundPosition = "center"; // Centrerar bilden
            }
            else if (body.name === "Neptunus") {
                planetDiv.style.backgroundImage = `url('assets/neptunus.webp')`;
                planetDiv.style.backgroundSize = "cover";     // Täcker hela div:en
                planetDiv.style.backgroundPosition = "center"; // Centrerar bilden
            }
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
window.closeOverlay = closeOverlay

init()