const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(express.static("public"));
app.use(bodyparser.json());
const cors = require("cors");
const port = 8000;
const dbconnection = require("./db");

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.post("/getquery", (request, response) => {
  console.log(request);
  let queryObj = {
    selector: {
      username: {
        $gt: "0",
      },
      password: {
        $gt: "0",
      },
    },
  };
  var retval = dbconnection.getlist(queryObj);
  response.json(retval);
  console.log("Data Fetched");
  object1 = {
    username1: request.body.username,
    password1: request.body.password,
  };
  console.log("Username :", object1.username1);
  console.log("Password :", object1.password1);
  // dbconnection.getuser(object1);
  console.log("Data Fetched");
});
app.listen(port, (err) => {
  if (err) {
    console.log("Something bad happened");
  }
  console.log(`Server running on http://localhost:${port}`);
});
