const User = require("../models/user");

const userController = {
  getAllUsers(req, res) {
    User.find()
      .then((data) => {
        console.log("got all users");
        res.send(data);
      })
      .catch((err) => {
        console.log("err", err);
        res.send([]);
      });
  },
  createUser(req, res) {
    const newUser = new User({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
    });
    newUser
      .save()
      .then((data) => {
        res.send(data);
        console.log(`Create ${req.body.name}'s account successfully`);
      })
      .catch((err) => {
        console.log("err", err);
        res.send([])
      });
  },
};

module.exports = userController;
