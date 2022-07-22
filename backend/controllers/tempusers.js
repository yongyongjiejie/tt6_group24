const userModel = require("../models/users");
const sha256 = require("crypto-js/sha256");
const uuid = require("uuid");

const user_controller = {
  register: (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    //   const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    // console.log(username);
    userModel
      .findOne(
        {
          $or: [{ username: username }],
        }
        // (err, result) => {
        //     // even if dont have result will be null
        //     if (result) {
        //         // means exist
        //         console.log(result);
        //         res.send(
        //             `Username/Email exists. Proceed to <a href="/">login</a>`
        //         );
        //         return;
        //     } else {
        //         let salt = uuid.v4();
        //         let combination = salt + password;
        //         let hash = sha256(combination).toString();
        //         user_model
        //             .create({
        //                 first_name: first_name,
        //                 last_name: last_name,
        //                 email: email,
        //                 pwsalt: salt,
        //                 hash: hash,
        //             })
        //             .then((result) => {
        //                 res.redirect("/");
        //             })
        //             .catch((err) => {
        //                 console.log(err);
        //             });
        //     }
        // }
      )
      .then((result) => {
        if (result) {
          // means exist
          console.log(result);
          res.statusCode = 400;
          res.json({
            success: false,
            message: "Username already exists",
          });
          return;
        }
        console.log("I should be here");
        let salt = uuid.v4();
        let combination = salt + password;
        let hash = sha256(combination).toString();
        userModel
          .create({
            firstname: first_name,
            lastname: last_name,
            username: username,
            pwsalt: salt,
            hashpw: hash,
          })
          .then((result) => {
            res.json({
              success: true,
              message: "New User is Registered",
            });
          })
          .catch((err) => {
            console.log(err);
            res.statusCode = 500;
            res.json({
              success: false,
              message: "unable to register due to unexpected error",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.json({
          success: false,
          message: "unable to register due to unexpected error",
        });
      });
    console.log("proving that return in .then will only break out of.then");
  },
  loginpage: {},

  login: (req, res) => {
    username = req.body.username;
    password = req.body.password;
    userModel.findOne({ username: username }, (err, result) => {
      if (result) {
        if (sha256(result.pwsalt + password).toString() === result.hashpw) {
          res.json({
            success: true,
          });
        } else {
          console.log("am I here");
          res.statusCode = 401;
          res.json({
            success: false,
            message: "Either username or password is wrong",
          });
        }
      } else {
        res.statusCode = 401;
        res.json({
          success: false,
          message: "Either username or password is wrong",
        });
      }
    });
  },
};

module.exports = user_controller;
