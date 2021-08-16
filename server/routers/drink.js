const express = require('express');
const drink = require('../models/drink');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let drinks = await drink.getAll();
        res.json({ resultCode: 0, drinks });
    }
    catch(err) {
        res.sendStatus(500);
    }
})

module.exports = router;