const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/store', function(req, res) {
    console.log(req.body);
    res.status(200).send(req.body);
});

app.get('/show/:id', (req, res) => {
    console.log(req.params.id);
    // return req.body;
});



app.listen(3000, () => {
    console.log('Serve rodando, porta 3000');
    
});


