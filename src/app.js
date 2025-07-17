const express = require("express");

const app = express();

app.use("/jatin", (req, res) => {
    res.send("hello from the jatin")
})
app.use((req, res) => {
    res.send("hello from the server")
})

app.listen(3000, ()=>{
    console.log("hey birather");
    
})