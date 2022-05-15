// const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
var login = {};
const file = require("fs");
const { request } = require("http");
const { response } = require("express");
const { nextTick } = require("process");
const cors = require("cors");
const dbconnection = require("./db");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/postquery", (request, response, next) => {
  console.log(request);
  var object = {
    username: request.body.username,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
    type: "usersignup",
  };

  dbconnection.insert(object);
  //   response.redirect("..");
  console.log("Data added");
});
app.get("/getquery", (request, response, next) => {
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
  // var object1 = {
  //   username: request.body.username,
  //   email: request.body.email,
  // };
  // dbconnection.getuser(object1);
  // console.log("Data Fetched");
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
