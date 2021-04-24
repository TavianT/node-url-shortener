const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const mongoCredentials = require('./mongoCredentials');

//express app
const app = express();
//connect to mongoDB
dbURI = `mongodb+srv://${mongoCredentials.username}:${mongoCredentials.password}@cluster0.4yiwl.mongodb.net/url-shortener?retryWrites=true&w=majority`;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.error(err))