const server = 'https://api.artifactsmmo.com';
// Använd ditt riktiga token här
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmwudmFyZXNrb2dAZ21haWwuY29tIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.w9uFikrqZu0CsUrSxXINg3EFB5yB5_tkAW5g_klLFNs';


// HTML-SELECTORS
const playerInfo = document.getElementById("player-info")
const playerName = document.getElementById("player-name")
const cooldownTimer = document.getElementById("coolown-timer")
const playerPosition = document.getElementById("player-position")
const characterLevel = document.getElementById("player-level")
const dropdownButton = document.getElementById("dropdown-button")
const dropdownMenu = document.getElementById("dropdown-content")
const restInformation = document.getElementById("rest-information")
const playerHealth = document.getElementById("player-health")




// VARIABLER
let characterName = ""
let currentX = 0
let currentY = 0
let cooldownTime = 10
let cooldownInterval;






function startCooldown() {
    cooldownTime = 10
    cooldownTimer.textContent = `${cooldownTime}s`;

    cooldownInterval = setInterval(() => {
        if (cooldownTime > 0) {
            cooldownTime -= 1
            cooldownTimer.textContent = `${cooldownTime}s`
        }
        else {
            clearInterval(cooldownInterval)
        }
    }, 1000);
}









// FUNKTIONER



// hämtar karaktär information
async function getCharInfo() {
    const url = `${server}/my/characters`
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(url, options)
        if (!response.ok) {
            throw new Error(`HTTP error Status: ${response.status}`)
        }
        const data = await response.json()
        console.log("Character data: ", data.data[0]);
        const character = data.data[0]
        characterName = character.name
        currentX = character.x
        currentY = character.y
        console.log("charName: " + characterName)

        // lägger till stats till HTML elementen
        playerName.textContent = character.name
        // cooldownTimer.textContent = character.cooldown
        playerPosition.textContent = `X: ${currentX}, Y: ${currentY}`
        characterLevel.textContent = character.level
        playerHealth.textContent = character.hp

    }
    catch (error) {
        console.error(error)
    }
}

async function move(direction) {

    if (direction === "up") currentY -= 1;
    if (direction === "down") currentY += 1;
    if (direction === "right") currentX += 1;
    if (direction === "left") currentX -= 1;

    const url = `${server}/my/${characterName}/action/move`
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ x: currentX, y: currentY })
    }

    try {

        const response = await fetch(url, options)
        if (!response.ok) {
            const errorData = await response.json()
            console.error(errorData)
            throw new Error("HTTP error")
        }

        const data = await response.json()
        console.log("move response: ", data);

        await getCharInfo()
        startCooldown()

        if (data.cooldown !== undefined) {
            cooldownTimer.textContent = data.cooldown
        }


    } catch (error) {
        console.error(error)
    }
}


// gå till banken
async function moveToPosition(x, y) {
    const url = server + "/my/" + characterName + "/action/move"
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmwudmFyZXNrb2dAZ21haWwuY29tIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.w9uFikrqZu0CsUrSxXINg3EFB5yB5_tkAW5g_klLFNs"
        },
        body: JSON.stringify({ x, y })
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data);
        await getCharInfo()
    }
    catch (error) {
        console.error(error)
    }


}


async function rest(params) {
    const url = 'https://api.artifactsmmo.com/my/karlgit/action/rest';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmwudmFyZXNrb2dAZ21haWwuY29tIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.w9uFikrqZu0CsUrSxXINg3EFB5yB5_tkAW5g_klLFNs'
        },
        body: undefined
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);


        restInformation.textContent = "HP restored: " + data.data.hp_restored

    } catch (error) {
        console.error(error);
    }
}



async function gatherRss() {
    
    
}




// KALLAR PÅ FUNKTION
getCharInfo()