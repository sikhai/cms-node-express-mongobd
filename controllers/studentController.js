const express = require('express')
var router = express.Router()
const monogoose  = require('mongoose')
const Student = monogoose.model('Student')

router.get('/', (req, res) => {
    res.render('student/addOrEdit', {
        viewTitle: 'Insert Student'
    })
})