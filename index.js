const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World 2!');
});
let port = 8000;
app.listen(port, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.