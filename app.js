const express = require('express')
const path = require('path');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname+'/style.css'));
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/script.js'));
})

app.get('/length', (req, res) => {
    res.render(path.join(__dirname+'/pages/length'));
});

app.get('/weight', (req, res) => {
    res.render(path.join(__dirname+'/pages/weight'));
});

app.get('/temperature', (req, res) => {
    res.render(path.join(__dirname+'/pages/temperature'));
});

app.use("/", router);
app.listen(PORT, () => console.log('server ready...'))
