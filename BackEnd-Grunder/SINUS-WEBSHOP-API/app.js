const express = require("express")
const cors = require("cors")
const productsRoute = require("./routes/products")
const cartRoute = require("./routes/cart")

const app = express()
const PORT = 3000


// middleware
app.use(cors())
app.use(express.json())

//routes 
app.use("/products", productsRoute)
app.use("/cart", cartRoute)


app.listen(PORT, () => {
    console.log(`server is running on https://localhost:${PORT}`)
})