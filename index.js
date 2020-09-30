const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphds = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')

var app = express()

app.listen(3000, () => {
    console.log("server stared at port 3000");
})