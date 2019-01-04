const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mysql = require('mysql');
const passport =  require('passport');


const app  = express();

//Passport Congfg

require('./config/passport')(passport);

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Connect to DB

var connection = mysql.createConnection({
  host : 'localhost',
  user: 'root',
  password : '',
  database : 'quarter' 
});

connection.connect(function(error){
    if(error){
        console.log('Error when trying to connect!');
    }else{
        console.log("Connected successfully!");
    }
});

//BodyParser
app.use(express.urlencoded({extended: false}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/', require('./routes/index'));
app.use('/users',require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Sever is running on port ${PORT}`));