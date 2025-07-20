const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://jatinrsaini:E7lNg88s1XnGtqAk@cluster0.c2wddzf.mongodb.net/")
}

module.exports = connectDB;

