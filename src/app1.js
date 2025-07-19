const express = require("express");

const app1 = express();

app1.use(
  "/user",
  (req, res, next) => {
    console.log("response 1");
   //  res.send("hii i am first response")
    next();
  },
  (req, res, next) => {
    console.log("ressponse 2");
   //  res.send("Hii i am second response ");
   next()
  }
);

app1.listen(4444, () => {
  console.log("i am listening");
});
