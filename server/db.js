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

// module.exports.getlist = function (paramsvalue1) {
//   console.log(paramsvalue1);
//   cloudant
//     .get(id)
//     .then((data) => {
//       console.log("Data Fetched from Clouddatabase" + data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// function getdata(para) {
//   cloudant
//     .use("first_sample")
//     .get(para)
//     .then((data) => {
//       console.log("Data Found");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// id: "f1249cfbb91cd3aebccf521321df1d85";
// getdata(id);

// let mango = {
//   selctor: {
//     data: {
//       [_id]: {
//         $eq: parseInt(_tmp),
//       },
//     },
//   },
// };

// var para = {};
// var dbName = config.org[0][1]["first_sample"];
// couch
//   .mango(first_sample, mango, para)
//   .then(function (data) {
//     console.log(data["data"]["docs"], data);
//     resolve(data["data"]["docs"]);
//   })
//   .catch(function (err) {
//     console.log(err);
//     resolve(err);
//   });
// fetchUserId: async (couchId, type, cloudant, metaDb) => {
//   try {
//     let queryObj = {
//       q: `type:${type} AND id:${type}_2_${couch}`,
//       limi: 200,
//       include_docs: true,
//     };
//     const db = cloudant.use(metaDb);
//     const data = await db.search(`${type}_search`, `${type}_search`, queryObj);
//     return data["rows"][0] ? data["rows"][0]["doc"]["data"]["user_id"] : 0;
//   } catch (error) {
//     console.error("Error", err);
//     return 0;
//   }
// };

//  }
// //   }.catch(err){
// //   console.error('Error',err);
// //   return 0;
// }
// }

module.exports.getlist = function (paramsvalue1) {
  console.log(paramsvalue1);
  cloudant
    .use("first_sample")
    .find(paramsvalue1)
    .then((data) => {
      console.log("Data Fetched from Clouddatabase" + JSON.stringify(data));
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports.getlist = function (paramsvalue2) {
  console.log(paramsvalue2);
  cloudant
    .use("first_sample")
    .all_data(paramsvalue2)
    .then((data) => {
      console.log("Data Fetched from Clouddatabase" + JSON.stringify(data));
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
