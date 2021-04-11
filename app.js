// import dependencies
const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
require('dotenv').config();
// define the express app
const app = express();
//Middlewares:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    //Check to see if database is connected successfully.
const DB = mongoose.connection
DB.once('open', () => console.log('connected to database'))
DB.on('error', (error)=> console.error(error))

app.get("/", function(request, response){

    response.send(process.env.DB_CONNECTION);
});
// Start the server with port 3000
app.listen(3000, () => console.log('server started'));
