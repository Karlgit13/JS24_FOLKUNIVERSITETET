// HÄMTA API NYKEL
export const getApiKey = async () => {
    const response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys", {
        method: "POST"
    })
    const data = await response.json()
    console.log(data)
    return data.key
}

// HÄMTA BODIES
export const getBodies = async (apiKey) => {
    const response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies", {
        method: "GET",
        headers: { "x-zocom": apiKey }
    })
    return response.json()
}
