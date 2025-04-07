const express = require("express")
const app = express()
const PORT = 3000

// middleware
app.use(express.json())

// enkel GET-route
app.get("/", (req, res) => {
    res.send("välkommen")
})


// starta server

app.listen(PORT, () => {
    console.log(`server körs på https:localhost/${PORT}`)
})