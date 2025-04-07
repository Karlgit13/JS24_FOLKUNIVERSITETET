const express = require("express");
const router = express.Router();
const products = require("../data/products.json");
const validateSerial = require("../middleware/validateBody");

let cart = []; // In-memory varukorg

// GET /cart - Hämta varukorg
router.get("/", (req, res) => {
    res.json(cart);
});

// POST /cart - Lägg till i varukorg
router.post("/", validateSerial, (req, res) => {
    const { serial } = req.body;
    const product = products.find(p => p.serial === serial);

    if (!product) {
        return res.status(404).json({ error: "Produkten finns inte" });
    }

    const alreadyInCart = cart.find(p => p.serial === serial);
    if (alreadyInCart) {
        return res.status(400).json({ error: "Produkten finns redan i varukorgen" });
    }

    cart.push(product);
    res.status(201).json({ message: "Produkt tillagd i varukorgen", product });
});

// DELETE /cart/:serial - Ta bort produkt från varukorg
router.delete("/:serial", (req, res) => {
    const { serial } = req.params;
    const index = cart.findIndex(p => p.serial === serial);

    if (index === -1) {
        return res.status(404).json({ error: "Produkten finns inte i varukorgen" });
    }

    const removed = cart.splice(index, 1);
    res.json({ message: "Produkt borttagen", product: removed[0] });
});

// POST /order - Lägg en order
router.post("/order", (req, res) => {
    if (cart.length === 0) {
        return res.status(400).json({ error: "Varukorgen är tom" });
    }

    const order = {
        id: Date.now(),
        items: cart,
    };

    cart = []; // Rensa varukorg efter order
    res.status(201).json({ message: "Order lagd!", order });
});

module.exports = router;
