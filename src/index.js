const express = require('express');

// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
const { PORT } = require('./config');
const { databaseConnection } = require('./database/index');
// const { employee } = require('./api');
const expressApp = require('./express-app');


const StartServer = async() => {
    
    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);

    app.listen(PORT || 8002,()=>{
        console.log("Connected to backend");
        console.log(PORT);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();





