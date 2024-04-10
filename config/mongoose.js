const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to database"));

db.once('open', ()=>{
    console.log("database connected successfully!!")
})

module.exports = db;