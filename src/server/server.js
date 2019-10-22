const express = require('express');
const path = require('path');
const bodyPar= require('body-parser');
let urlEncoded= bodyPar.urlencoded({extended:false});


const app = express(),
            DIST_DIR = path.join(__dirname, '../../public'),
            HTML_FILE = path.join(DIST_DIR, 'index.html')
            
app.use(express.static(DIST_DIR))



// const mockResponse = {
//     foo: 'bar',
//     bar: 'foo'
//   };

  app.post('/api',urlEncoded, (req, res) => {
   // res.send(mockResponse);

let response={
  firstName : req.body.nom ,
  lastName : req.body.prenom
}

res.send('<p>' + req.body.nom +' ' + req.body.prenom + '</p>')
//res.send(JSON.stringify(response)); 

  });


  app.get('/', (req, res) => {
   res.sendFile(HTML_FILE); // EDIT
    // res.redirect('http://localhost:5000/');
  });






let port = 4000;
app.listen(port, () => {
    console.log('Example app listening on port http://localhost:'+port);
});

//Run app, then load http://localhost:port in a browser to see the output.