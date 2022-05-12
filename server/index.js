const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
var urlParser = bodyParser.urlencoded({ extended: false });
const cors = require("cors");
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.get("/send", function (request, response) {
  response.json({ name: "hari2", id: "1", email: "hari@gmail.com" });
});
app.post("/postquery", urlParser, function (request, response) {
  var fname = request.body.fname;
  var lname = request.body.lname;
  console.log(`${fname}   ${lname}`);
  var data = {
    first_name: fname,
    last_name: lname,
  };
  response.end(JSON.stringify(data));
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
// const Cloudant = require("@cloudant/cloudant");
// var url =
//   "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud";
// var username = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
// var password = "ec6094ae0714dc7a5ffc50a86924bef3";

// var cloudant = Cloudant({ url: url, username: username, password: password });

// cloudant.db
//   .create("sam")
//   .then(() =>
//     cloudant
//       .use("sam")
//       .insert({ happy: true }, rabbit)
//       .then((data) => {
//         console.log(data);
//       })
//   )
//   .catch((err) => {
//     console.log(err);
//   });
