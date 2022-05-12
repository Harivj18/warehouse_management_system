const Cloudant = require("@cloudant/cloudant");
var url =
  "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
var password = "ec6094ae0714dc7a5ffc50a86924bef3";

var cloudant = Cloudant({ url: url, username: username, password: password });

// cloudant.db
//   .create("sam")
//   .then(() =>
//     cloudant
//       .use("sam")
//       .insert({ happy: true }, "rabbit")
//       .then((data) => {
//         console.log(data);
//       })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

module.exports.insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("first_sample")
    .insert(paramsvalue)
    .then((data) => {
      console.log("Data Inserted into Clouddatabase" + data);
    })
    .catch((err) => {
      console.log(err);
    });
};
