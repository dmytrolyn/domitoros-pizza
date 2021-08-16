const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const Order = require('../models/order');
const router = express.Router();

router.post('/insert', passport.authenticate('jwt'), async (req,res) => {
    try {
        let { order } = req.body.order;
        await Order.insert(order);
        await User.update(req.user._id, order);
        res.status(201).json({ resultCode: 0 });
    } catch(err) {
        res.sendStatus(500);
    }
})

router.put('/insert', async (req, res) => {
    try {
        let { order } = req.body;
        await Order.insert(order);
        res.status(201).json({ resultCode: 0 });
    } catch(err) {
        res.sendStatus(500);
    }
})

module.exports = router;

