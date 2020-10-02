require('./models/db')

const express = require('express');
const path = require('path');
const handlebars = require('handlebars');
const exphds = require('express-handlebars');
const {
    allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

const studentController = require("./controllers/studentController");

var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send(`
    <h2>Xin chao ban da den voi Students Database</h2>
    <h3>Nhan vao de xem chi tiet <b><a href="/student/list">Database</a></b></h3>
    `)
});

app.set('views', path.join(__dirname, '/views/'));

app.engine(
    "hbs",
    exphds({
        handlebars: allowInsecurePrototypeAccess(handlebars),
        extname: "hbs",
        defaultlayout: "MainLayout",
        layoutsDir: __dirname + "/views/layouts/",
    })
);

app.listen(3000, () => {
    console.log("server stared at port 3000");
});

