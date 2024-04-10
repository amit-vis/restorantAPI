const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const db = require('./config/mongoose');
const adminJwt = require('./config/passport-jwt-admin');
const userJwt = require('./config/passport-jwt-user')

app.use(express.json());
app.use(bodyParser.json())

app.use('/', require('./routes'));

app.listen(port, (err)=>{
    if(err){
        console.log("error in listening the port", err)
    }
    console.log("server is listening the port", port)
})