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
        if (body.type === "planet" || "sun") {   // KONTROLLERAR OM OBJEKTET ÄR EN PLANET
            const planetDiv = document.createElement("div") // SKAPAR EN NY DIV FÖR PLANETEN
            planetDiv.classList.add("planet")   // LÄGGER TILL KLASSEN "PLANET" FÖR STYLING
            planetDiv.addEventListener("click", () => showOverlay(body)) // KLICK-HÄNDELSE FÖR VISA OVERLAY
            container.appendChild(planetDiv)    // LÄGGER TILL PLANET DIVEN I CONTAINER
            console.log("Visar planet:", body.name) // LOGGAR PLANETENS NAMN


            // SÄTTER BAKGRUNDSBILD BASERAT PÅ PLANETENS NAMN
            if (body.name === "Merkurius") {
                planetDiv.classList.add("merkurius")
                planetDiv.style.backgroundImage = `url('assets/merkurius.jpeg')`
                planetDiv.style.backgroundSize = "cover"     // TÄCKER HELA DIVEN
                planetDiv.style.backgroundPosition = "center" // CENTRERAR BILDEN
            } else if (body.name === "Venus") {
                planetDiv.classList.add("venus")
                planetDiv.style.backgroundImage = `url('assets/venus.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Jorden") {
                planetDiv.classList.add("jorden")
                planetDiv.style.backgroundImage = `url('assets/jorden.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Mars") {
                planetDiv.classList.add("mars")
                planetDiv.style.backgroundImage = `url('assets/mars.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Jupiter") {
                planetDiv.classList.add("jupiter")
                planetDiv.style.backgroundImage = `url('assets/jupiter.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Saturnus") {
                planetDiv.classList.add("saturnus")
                planetDiv.style.backgroundImage = `url('assets/saturnus.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Uranus") {
                planetDiv.classList.add("uranus")
                planetDiv.style.backgroundImage = `url('assets/uranus.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Neptunus") {
                planetDiv.classList.add("neptunus")
                planetDiv.style.backgroundImage = `url('assets/neptunus.webp')`
                planetDiv.style.backgroundSize = "cover"
                planetDiv.style.backgroundPosition = "center"
            }
            else if (body.name === "Solen") {
                planetDiv.classList.add("solen")
                planetDiv.style.backgroundImage = `url('assets/sun.webp')`
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
        <h1>${body.name.toUpperCase()} </h1>
        <h2>${body.latinName.toUpperCase()}</h2>
        <p>${body.desc}</p>
        <hr>
        <div class="grid-container">
        <p><strong>OMKRETS</strong> <br>${body.circumference} km</p>
        <p><strong>KM FRÅN SOLEN</strong><br> ${body.distance} km</p>
        <p><strong>MAX TEMPERATUR</strong><br> ${body.temp.day}°C</p>
        <p><strong>MIN TEMPERATUR</strong><br> ${body.temp.night}°C</p>
        </div>
        ${body.moons && body.moons.length > 0 ? `<p><strong>MÅNAR</strong><br>${body.moons.join(', ')}</p>` : ''}
        <hr>
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