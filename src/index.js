const express = require("express");
// require("./config/database");
const connectDB = require("./config/database");
const User = require("./model/User")
const app = express();

app.use(express.json());

// POST API
app.post("/signUp", async (req, res, next)=>{

    console.log(req.body)
    const ojb = new User(req.body
        // firstName : "anisha",
        // lastName : "Saini",
        // password : "anisha@123",
        // email : "anisha@gmail.com"

    )

    await ojb.save()
    res.send("user added successfully")


});


// GET API
app.get("/user", async (req, res)=>{
    const userEmail = req.body.email;

    try{
     const user = await User.find({email : userEmail});
     res.send(user);
    }
    catch{
        console.log("Error 69 ");
        
    }

});


// DELETE API
app.delete("/user", async (req, res)=>{

    const userId = req.body.userId

    try{
    const user = await User.findByIdAndDelete(userId)
    res.send('user deleted successfully')
    }
    catch{
        console.log("Error 69");
        
    }


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


