function validateSerial(req, res, next) {
    const { serial } = req.body;

    if (!serial || typeof serial !== "string") {
        return res.status(400).json({ error: "serial måste vara en sträng" });
    }

    next();
}

module.exports = validateSerial;
