const express = require('express')
const path = require('path');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

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
app.listen(PORT, () => console.log('server ready...'))
