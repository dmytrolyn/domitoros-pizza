require('dotenv').config();
// server
const express = require('express');
const app = express();
// tools
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport')
// routers
const pizzaRouter = require('./routers/pizza');
const drinkRouter = require('./routers/drink');
const dessertRouter = require('./routers/dessert');
const feedbackRouter = require('./routers/feedback');
const orderRouter = require('./routers/orders');
const authRouter = require('./routers/auth');
const usersRouter = require('./routers/users');
// env variables
const PORT = process.env.PORT;
const DB_PATH = process.env.DB_PATH;

const connectOptions = { useNewUrlParser: true, ignoreUndefined: true, useUnifiedTopology: true };
// db connection
mongoose.connect(DB_PATH, connectOptions)
    .then(() => app.listen(PORT, () => console.log(`Server listen at port: ${PORT}`)))
    .catch(err => console.log(err.toString()));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/v1/pizzas', pizzaRouter);
app.use('/api/v1/drinks', drinkRouter);
app.use('/api/v1/desserts', dessertRouter);
app.use('/api/v1/feedback', feedbackRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/users', usersRouter);

