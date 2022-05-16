const Cloudant = require("@cloudant/cloudant");
const { type } = require("express/lib/response");
var url =
  "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
var password = "ec6094ae0714dc7a5ffc50a86924bef3";
var _id = "f1249cfbb91cd3aebccf521321df1d85";
var _tmp = "name";
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

insert = function (paramsvalue) {
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
get = function (dbname) {
  return cloudant.use(dbname).list();
};
getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
del_id = function (id, dbname) {
  return cloudant.use(dbname).destroy(id);
};
getlist = function (paramsvalue2) {
  console.log(paramsvalue2);
  cloudant
    .use("first_sample")
    .find(paramsvalue2)
    .then((data) => {
      console.log("Data Fetched from Clouddatabase" + JSON.stringify(data));
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getlist, get, getId, insert, del_id };
