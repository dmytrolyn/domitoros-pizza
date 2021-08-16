const express = require('express');
const user = require('../models/user');
const passport = require('passport');
const argon2 = require('argon2');

const router = express.Router();

router.get('/history', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        let us = await user.getById(req.user._id);
        let orders = us.orders;
        res.status(200).json({ resultCode: 0, orders });
    } catch(err) {
        res.sendStatus(500);
    }
})

router.post('/update', passport.authenticate('jwt', { session: false }), changePass, async (req, res) => {
    try {
        let r = await user.update(req.user._id, req.body.data);
        if(r.ok === 1) {
            res.status(200).json({ resultCode: 0 });
        } else {
            res.status(200).json({ resultCode: 1, message: "User was not found" });
        }
    } catch(err) {
        res.sendStatus(500);
    }
})

async function changePass (req, res, next) {
    if(Object.keys(req.body.change).length === 0) {
        next();
    }
    let { old_pass, password, password2 } = req.body.change;
    if(old_pass) {
        try {
            let us = await user.getById(req.user._id);
            let isEqual = await argon2.verify(us.password, old_pass);
            if(!isEqual) {
                res.status(200).json({ resultCode: 1, message: "Invalid old password"});
                return;
            }
            if(old_pass === password) {
                res.status(200).json({ resultCode: 1, message: "New password cannot be equal to old one" });
                return;
            }
            if(password !== password2) {
                res.status(200).json({ resultCode: 1, message: "Passwords are not equal"});
                return;
            } else {
                let hashed_pass = await argon2.hash(password);
                let resp = await user.changePassword(req.user._id, hashed_pass);
                if(resp.nModified === 1) {
                    next();
                } else {
                    res.sendStatus(400);
                }
            }
        } catch(err) {
            res.sendStatus(500);
        }
    }
}

module.exports = router;