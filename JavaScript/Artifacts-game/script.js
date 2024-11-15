//Use node index.js in the terminal for execute the script.
const server = 'https://api.artifactsmmo.com';
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthcmwudmFyZXNrb2dAZ21haWwuY29tIiwicGFzc3dvcmRfY2hhbmdlZCI6IiJ9.w9uFikrqZu0CsUrSxXINg3EFB5yB5_tkAW5g_klLFNs';
const character = 'karlgit';

async function movement() {
    const url = server + '/my/' + character + '/action/move';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: '{"x":0,"y":0}', //change the position here
    };

    try {
        const response = await fetch(url, options);
        const { data } = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

movement();
