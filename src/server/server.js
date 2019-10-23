const express = require('express');
var createError = require('http-errors');
const path = require('path');
//const bodyPar= require('body-parser');
//let urlEncoded= bodyPar.urlencoded({extended:false});
const logger = require('morgan');


const app = express(),
            DIST_DIR = path.join(__dirname, '../../public'),
            HTML_FILE = path.join(DIST_DIR, 'index.html')
            
app.use(express.static(DIST_DIR))




// MongoDB driver
const mongoose = require('mongoose');
const DB_URI= "mongodb://localhost:27017/myproject"

// Connect to MongoDB
mongoose.connect(DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true } )
// connectioin events
mongoose.connection.once('connected', () => {
  console.log("Database connected to " + DB_URI)
})

mongoose.connection.on('error', () => {
  console.log("MongoDB connection error ")
})
mongoose.connection.once('disconnected', () => {
  console.log("Database disconnected ")
})

// If Node's process ends, close the MongoDB connection

process.on('SIGINT',() => {
  mongoose.connection.close(() => {
      console.log("Database disconnected through app termination")
      process.exit(0)
    }
    
  )
}

)


 app.use(logger('dev'));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
// GET request with params
// app.get('/products/:d', (req, res) => {
//   let id = req.params.id
//   res.send('your ID is ${id}')
// });



// const mockResponse = {
//     foo: 'bar',
//     bar: 'foo'
//   };

//   app.post('/api',urlEncoded, (req, res) => {
//    // res.send(mockResponse);

// let response={
//   firstName : req.body.nom ,
//   lastName : req.body.prenom
// }

// res.send('<p>' + req.body.nom +' ' + req.body.prenom + '</p>')
// //res.send(JSON.stringify(response)); 

//   });

//   app.get('/contact', (req, res) => {
//    res.sendFile(HTML_FILE); // EDIT
//      // res.redirect('http://localhost:5000/');
//  //res.render(path.join(__dirname, 'index.js'));
 
//    });

// app.post('/api',urlEncoded, (req, res) => {
//   // res.send(mockResponse);

// let response={
//  firstName : req.body.nom ,
//  lastName : req.body.prenom
// }

// res.send('<p>' + req.body.nom +' ' + req.body.prenom + '</p>')
// //res.send(JSON.stringify(response)); 

//  });


// Routes =========================================
//app.use('/api', require('../js/routes/posts'));
//app.use('/api', require('../js/routes/pages'));

//app.use('/api', );

app.get('/api', (req, res) => {
  res.send('<p>' + req.query.nom +' ' + req.query.prenom + '</p>')
   // res.redirect('http://localhost:5000/');
//res.render(HTML_FILE);

 });

 app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
   // res.redirect('http://localhost:5000/');
//res.render(HTML_FILE);

 });


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









let port = 4000;
app.listen(port, () => {
    console.log('Example app listening on port http://localhost:'+port);
});

//Run app, then load http://localhost:port in a browser to see the output.