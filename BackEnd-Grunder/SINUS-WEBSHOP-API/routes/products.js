const express = require("express")
const router = express.Router()
const products = require("../data/products.json")

// GET /products - hämta alla produkter
router.get("/", (req, res) => {
    res.json(products)  
})


module.exports = router