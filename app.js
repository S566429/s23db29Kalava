var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var icecreamRouter = require('./routes/icecream');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var Icecream = require("./models/icecream");
const icecream = require('./models/icecream');
const icecreamRouter2 = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('dotenv').config();
const connectionString = 
process.env.MONGO_CON
mongoose = require('mongoose');
//console.log(connectionString);
mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/icecream', icecreamRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', icecreamRouter2);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on

async function recreateDB(){
// Delete everything
await icecream.deleteMany();
let instance1= new icecream({icecream_flavour:"chocolate", icecream_quantity:'5',icecream_cost:100});
let instance2=new icecream({icecream_flavour:"black current", icecream_quantity:'10',icecream_cost:500});
let instance3=new icecream({icecream_flavour:"Butterschotch", icecream_quantity:'20',icecream_cost:1000});


instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});

instance2.save().then(doc=>{
  console.log("second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  
  instance3.save().then(doc=>{
    console.log("third object saved")}
    ).catch(err=>{
    console.error(err)
    });
}

    
let reseed = true;
if (reseed) {recreateDB();}


module.exports = app;
