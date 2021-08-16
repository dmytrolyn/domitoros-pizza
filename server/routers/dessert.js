const express = require('express');
const dessert = require('../models/dessert');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let desserts = await dessert.getAll();
        res.json({ resultCode: 0, desserts });
    }
    catch(err) {
        res.sendStatus(500);
    }
})

module.exports = router;