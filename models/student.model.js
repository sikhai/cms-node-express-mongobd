const mongoose = require('mongoose')

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: "This field is require",
    },
    email: {
        type: String,
        require: "This field is require",
    },
    phonenumber: {
        type: Number,
        require: "This field is require"
    },
    address: {
        type: String,
        require: "This field is require"
    },
});

mongoose.model("Student", studentSchema);