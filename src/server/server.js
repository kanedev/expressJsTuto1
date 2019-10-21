const express = require('express');
const path = require('path')

//app.use(express.static('../../public'));
const app = express(),
            DIST_DIR = path.join(__dirname, '../../public'),
            HTML_FILE = path.join(DIST_DIR, 'index.html')
            
app.use(express.static(DIST_DIR))
app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

// app.get('/index.html', (req, res) => {
//      res.send('Coucou');
//      req.param(name='walid');
    
//  });


app.get('/', (req, res) => {
    res.send('Hello World 2!');
});
let port = 8000;
app.listen(port, () => {
    console.log('Example app listening on port http://localhost:'+port);
});

//Run app, then load http://localhost:port in a browser to see the output.