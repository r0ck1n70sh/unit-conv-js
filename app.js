const express = require('express')
const path = require('path');
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname+'/style.css'));
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/script.js'));
})

app.use("/", router);
app.listen(process.env.port || 5000, () => console.log('server ready...'))
