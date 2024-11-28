// IMPORTERAR FETCH FUNKTIONER
import { getApiKey, getBodies } from "./modules/api.js"





// INITIERA KEY OCH BODIES
const init = async () => {
    try {
        const apiKey = await getApiKey()  // INVÄNTAR API NYKEL
        const bodiesData = await getBodies(apiKey) // HÄMTAR DATA MED NYCKEL
        displayPlanets(bodiesData.bodies); // ANROPAR FUNKTION FÖR VISA PLANETER
        console.log(bodiesData) // LOGGAR DATAN I KONSOLL
    }
    catch (error) {
        console.error("error fetching: ", error) // LOGGAR EVENTUELLA FEL
    }
}







// VISA PLANETER
const displayPlanets = (bodies) => {
    const container = document.getElementById("planet-container")   // HÄMTAR HTML ELEMENT
    bodies.forEach(body => {    // LOOPAR IGENOM VARJE OBJEKT I BODIES ARRAYEN
        if (body.type === "planet") {   // KONTROLLERAR OM OBJEKTET ÄR EN PLANET
            const planetDiv = document.createElement("div") // SKAPAR EN NY DIV FÖR PLANETEN
            planetDiv.classList.add("planet")   // LÄGGER TILL KLASSEN "PLANET" FÖR STYLING
            planetDiv.addEventListener("click", () => showOverlay(body)) // KLICK-HÄNDELSE FÖR VISA OVERLAY
            container.appendChild(planetDiv)    // LÄGGER TILL PLANET DIVEN I CONTAINER
            console.log("Visar planet:", body.name) // LOGGAR PLANETENS NAMN


            // SÄTTER BAKGRUNDSBILD BASERAT PÅ PLANETENS NAMN
            if (body.name === "Merkurius") {
                planetDiv.style.backgroundImage = `url('assets/merkurius.jpeg')`
                planetDiv.style.backgroundSize = "cover"     // TÄCKER HELA DIVEN
                planetDiv.style.backgroundPosition = "center" // CENTRERAR BILDEN
            } else if (body.name === "Venus") {
                planetDiv.style.backgroundImage = `url('assets/venus.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Jorden") {
                planetDiv.style.backgroundImage = `url('assets/jorden.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Mars") {
                planetDiv.style.backgroundImage = `url('assets/mars.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Jupiter") {
                planetDiv.style.backgroundImage = `url('assets/jupiter.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Saturnus") {
                planetDiv.style.backgroundImage = `url('assets/saturnus.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Uranus") {
                planetDiv.style.backgroundImage = `url('assets/uranus.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Neptunus") {
                planetDiv.style.backgroundImage = `url('assets/neptunus.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
        }
    })
}







// VISA OVERLAY MED INFO OM PLANETEN
const showOverlay = (body) => {
    const overlay = document.getElementById("overlay") // HÄMTAR OVERLAY ELEMENTET
    // FYLLER OVERLAY MED INFO OM DEN KLICKADE PLANETEN
    overlay.innerHTML = `
        <h2>${body.name} (${body.latinName})</h2>
        <p>${body.desc}</p>
        <p><strong>Omkrets:</strong> ${body.circumference} km</p>
        <p><strong>Dygnets längd:</strong> ${body.rotation} jorddygn</p>
        <p><strong>Omloppsperiod:</strong> ${body.orbitalPeriod}</p>
        <p><strong>Temperatur:</strong> Dag: ${body.temp.day}°C, Natt: ${body.temp.night}°C</p>
        <button onclick="closeOverlay()">Stäng</button>
    `
    overlay.classList.remove("hidden") // VISAR OVERLAY GENOM ATT TA BORT KLASSEN "HIDDEN"
}





// STÄNG OVERLAY
const closeOverlay = () => {
    document.getElementById("overlay").classList.add("hidden") // LÄGGER TILL HIDDEN KLASSEN FÖR DÖLJA OVERLAY
}
window.closeOverlay = closeOverlay // GÖR FUNKTIONEN TILLGÄNGLIG GLOBALT





// KALLAR PÅ INIT FUNKTION / KÖR NÄR SIDAN LADDAS
init()