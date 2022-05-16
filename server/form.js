// const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
const cors = require("cors");
const dbconnection = require("./db");
const { request } = require("express");
const { response } = require("express");
// const { response } = require("express");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/postquery", (request, response) => {
  console.log(request);
  var object = {
    username: request.body.username,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
  };

  dbconnection.insert(object);
  console.log("Data added");
});
app.post("/adduser", (request, response) => {
  console.log(request);
  var object = {
    username: request.body.username,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
  };

  dbconnection.insert(object);
  console.log("Data added");
});
app.get("/getUser", (request, response) => {
  console.log(request);
  console.log("Fetching Begins");
  dbconnection.get("first_sample").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "first_sample").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.delete("/delete/:id", (request, response) => {
  dbconnection.del_id(request.params.id, "first_sample").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
