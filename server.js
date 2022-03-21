const express = require('express');
const connectDB = require('./config/db');


const app= express();

// Connect Database
connectDB();

app.get('/', (req,res)=>res.send('Test api running'));

const PORT=process.env.PORT || 5050;

app.listen(PORT, ()=> {
    console.log('Server started on port ', PORT);
})