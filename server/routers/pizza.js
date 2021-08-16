const express = require('express');
const pizza = require('../models/pizza');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let pizzas = await pizza.getAll();
        res.json({ resultCode: 0, pizzas });
    }
    catch(err) {
        res.sendStatus(500);
    }
})

module.exports = router;