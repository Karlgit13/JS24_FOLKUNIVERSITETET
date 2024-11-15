
//Use node index.js in the terminal for execute the script.
//Warning: Firefox does not fully support the editor. Please use a chromimum-based web browser such as Chrome, Brave or Edge.
//This script is a basic example of a player's movement. You can load other examples by clicking on "Load example".
const server = 'https://api.artifactsmmo.com';
//Your token is automatically set
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmwudmFyZXNrb2dAZ21haWwuY29tIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.w9uFikrqZu0CsUrSxXINg3EFB5yB5_tkAW5g_klLFNs';
//Put your character name here
const character = 'karlgit';

const directionMap = {
    up: { x: 0, y: -1 },
    right: { x: 1, y: 0 },
    down: { x: 0, y: 1 },
    left: { x: -1, y: 0 }
};

// flytta gubben flera steg
async function move(direction, steps = 1) {
    const { x: dx, y: dy } = directionMap[direction];

    // Upprepa förflyttningen 'steps' antal gånger
    for (let i = 0; i < steps; i++) {
        const url = `${server}/my/${character}/action/move`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ x: dx, y: dy })
        };

        try {
            const response = await fetch(url, options);
            const { data } = await response.json();
            console.log(data);

            // Uppdatera spelarinformation efter varje steg
            updatePlayerInfo(data.position, data.cooldown);

            // Kolla om det finns en cooldown, om ja, vänta tills den är klar innan nästa steg
            if (data.cooldown && data.cooldown.remaining_seconds > 0) {
                console.log(`Väntar på cooldown: ${data.cooldown.remaining_seconds} sekunder`);
                await new Promise(resolve => setTimeout(resolve, data.cooldown.remaining_seconds * 1000));
            }

        } catch (error) {
            console.error("Error moving player:", error);
            break; // Avsluta om ett fel inträffar
        }
    }
}
