const express = require("express");

const app = express();

app.post("/jatin", (req, res) => {
  res.send({firstName:"jatin", lastname:"saini"});
});

app.get("/jatin", (req, res) => {
  res.send("hello from the jatin");
});

// use handles all types in same route so we have use different types 
app.use("/jatin", (req, res) => {
  res.send("hello from the jatin");
});

// app.use("/server", (req, res) => {
//   res.send("hello from the server");
// });

// app.use("/server/2", (req, res) => {
//   res.send("hello from server 2");
// });

app.listen(3000, () => {
  console.log("hey birather");
});
