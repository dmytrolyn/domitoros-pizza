const express = require('express');
const user = require('../models/user');
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const router = express.Router();
require('dotenv').config();

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

const generateJwtToken = (userData) => {
    let { _id, login, fakeId } = userData;
    const data = {
        _id,
        login,
        fakeId
    };
    const signature = process.env.JWT_SECRET;
    const expiration = '1h';

    return jwt.sign({ data }, signature, { expiresIn: expiration });
}

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    let { _id, password, ...rest } = req.user._doc;
    res.status(200).json({ resultCode: 0, data: { ...rest } })
})

router.post('/login', async (req, res) => {
    let { login, password } = req.body;
    try {
        const checkUser = await user.findByLogin(login);
        if(checkUser) {
            const correctPassword = await argon2.verify(checkUser.password, password);
            if(correctPassword) {
                let token = generateJwtToken(checkUser);
                res.status(200).json({ resultCode: 0, token });
            } else {
                res.status(200).json({ resultCode: 1, message: "Invalid username or password" });
            }
        } else {
            res.status(200).json({ resultCode: 1, message: "Invalid username or password" });
        }
    } catch (err) {
        res.sendStatus(500);
    }
});

router.post('/register', async (req, res) => {
    let { login, password, password2 } = req.body;
    if(password !== password2) {
        res.json({ resultCode: 1, message: "Passwords are not equal" });
        return;
    }
    try {
        let hashed_pass = await argon2.hash(password);
        const new_user = new user(null, login, hashed_pass);
        let test = await user.findByLogin(login);
        if (test) {
            res.status(200).json({ resultCode: 1, message: "Username already exists" });
        } else {
            await user.insert(new_user);
            res.status(201).json({ resultCode: 0 });
        }
    }
    catch (err) {
        res.sendStatus(500);
    }
});

passport.use(new JwtStrategy(jwtOptions, async function(jwt_payload, done) {
    try {
        let { login } = jwt_payload;
        let currUser = await user.findByLogin(login);
        if(currUser) {
            return done(null, currUser);
        } else {
            return done(null, false);
        }
    } catch(err) {
        return done(err, false);
    }
}));

module.exports = router;