const mongoose = require("mongoose");

const studentschema = new mongoose.Schema({
    name : String,
    gender : String,
    class : String,
    section : String,
    maths : Number,
    science : Number,
    english : Number,
})

const student = mongoose.model("student",studentschema);

module.exports = student;