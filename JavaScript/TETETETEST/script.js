const apiKey = "oAP7PRe0r8rq7SOapEFzTBZpAMYLwfC7";

// Funktion för att hämta väderdata
async function getWeather(city) {
    try {
        const location = await getCoordinates(city);
        const url = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature,weatherCode&timesteps=current&units=metric&apikey=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data?.data?.timelines) {
            const temperature = data.data.timelines[0].intervals[0].values.temperature;
            const weatherCode = data.data.timelines[0].intervals[0].values.weatherCode;

            return { temperature, weatherCode };
        } else {
            throw new Error("Väderdata kunde inte hämtas");
        }
    } catch (error) {
        console.error("Fel vid hämtning av väderdata:", error);
        return null;
    }
}

// Hämta koordinater baserat på stad
async function getCoordinates(city) {
    const apiKey = "DIN_GEOCODING_API_KEY"; // Om du använder en geokodningstjänst för att få koordinater.
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
    const data = await response.json();
    if (data.length > 0) {
        return `${data[0].lat},${data[0].lon}`;
    } else {
        throw new Error("Ingen plats hittades");
    }
}

getWeather("New york")
    .then(weatherData => console.log(weatherData))
    .catch(error => console.error(error));
