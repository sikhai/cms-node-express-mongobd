const express = require('express')
var router = express.Router()
const monogoose  = require('mongoose')
const Student = monogoose.model('Student')

router.get('/', (req, res) => {
    res.render('student/addOrEdit', {
        viewTitle: 'Insert Student'
    })
});

router.post("/", (req, res) => {
    if(req.body._id == ""){
        insertRecord(req, res);
    }else{
        updateRecord(req, res);
    }
});

function insertRecord(req, res){
    var student = new Student();
    student.fullName = req.body.fullname;
    student.email = req.body.email;
    stundent.phonenumber = req.body.phonenumber;
    student.address = req.body.address;
    student.save((err, doc) => {
        if(!err){
            res.redirect('student/list')
        }else{
            console.log('Error during insert: ' + err)
        }
    })
}

function updateRecord(req, res){
    Student.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new:true },
        (err, doc) => {
            if(!err){
                req.redirect('student/list')
            }else{
                console.log('Error during update: ' + err)
            }
        }
    );
}

router.get('/list', (req, res) => {
    Student.find((req, docs) => {
        if(!err) {
            res.render('student/list', {
                list: docs
            })
        }else{
            console.log('Error in retrieval')
        }
    })
})

router.get("/:id", (req, res) => {
    Student.findById(req.params.id, (req, res) => {
        if(!err){
            res.render("student/addOrEdit", {
                viewTitle: "Update Student",
                student: doc,
            });
            console.log(doc);
        }
    });
});

router.get("delete/:id", (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.redirect("student/list")
        }else{
            console.log("Error in deletion" + err)
        }
    });
});