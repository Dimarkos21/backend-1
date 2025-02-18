require('dotenv').config();
const { log } = require('console');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');



(async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI_TEST)
        console.log('conectado correctamente');
    } catch (error) {
        console.log(error);
    }
})();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//rutas frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/todos', express.static(path.resolve('views', 'todos')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('img')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));


app.use(morgan('tiny'));

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

module.exports = app;

