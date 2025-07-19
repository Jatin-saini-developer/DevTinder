const express = require("express");

const app1 = express();

const {adminAuth} = require("./middleWares/auth")


// METHOD 1
// app1.use(
//   "/user",
//   (req, res, next) => {
//     console.log("response 1");
//    //  res.send("hii i am first response")
//     next();
//   },
//   (req, res, next) => {
//     console.log("ressponse 2");
//    //  res.send("Hii i am second response ");
//    next()
//   }
// );


// METHOD 2

// app1.use("/user",(req, res, next)=>{
//    console.log("response 1");
//    // res.send("i am response 1 ")
//    next()
// })

// app1.use("/user",(req, res, next)=>{
//    res.send("i am response 2")

// })


//

app1.use("/user",adminAuth)

app1.get("/user/getAllData",(req, res, next)=>{
   res.send("get all the data ")
})

app1.get("/user/deleteUser",(req, res, next)=>{
   res.send("deleted the data ")
})

app1.listen(4444, () => {
  console.log("i am listening");
});
