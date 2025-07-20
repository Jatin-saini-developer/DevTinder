const express = require("express");
// require("./config/database");
const connectDB = require("./config/database");
const User = require("./model/User")
const app = express();


app.post("/signUp", async (req, res, next)=>{
    const ojb = new User({
        firstName : "anisha",
        lastName : "Saini",
        password : "anisha@123",
        email : "anisha@gmail.com"
    })

    await ojb.save()
    res.send("user added successfully")
})


connectDB()
.then(()=>{
    console.log("DataBase connection established");
    app.listen(4444, ()=>{
    console.log("Server is am running");
})
    
})
.catch(()=>{
    console.error("DataBase is not connected")
})


