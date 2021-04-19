// import dependencies
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const morgan = require('morgan');
const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

const port = process.env.PORT || 3000;
// define the express app
const app = express();
//Middlewares:
const corsOptions = {
  origin: 'http://localhost:8080'
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api', routes);
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true,
	useUnifiedTopology: true })
	//Check to see if database is connected successfully.
const DB = mongoose.connection;
DB.once('open', () => console.log('[OK] connected to database'));
DB.on('error', (error)=> console.error(error));

// user.save()
// .then(function(doc){
//     console.log("Сохранен объект", doc);
//     mongoose.disconnect();  // отключение от базы данных
// })
// .catch(function (err){
//     console.log(err);
//     mongoose.disconnect();
// });

app.get("/api", function(request, response){

    response.json({dbUrl: process.env.DB_CONNECTION, message: 'Api Works'});
});
app.get("/", function(request, response){

    response.send('Hello');
});
// Start the server with port 3000
app.listen(port, () => console.log(`[OK] server started on port ${port}`));