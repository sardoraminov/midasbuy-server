const { Router } = require("express");
const { allUsers, createUser } = require("../services/user.service.js");

const router = Router();

//midasbuy-fuck.herokuapp.com/api/user
https: router.get("/user", (req, res) => {
  allUsers()
    .then((users) => res.send(users))
    .catch(() => {
      res.send("error");
      console.log("Error");
    });
});

router.post("/register", (req, res) => {
  const { login, password } = req.body;
  createUser(login, password)
    .then((users) => res.json(users))
    .catch(() => {
      res.send("error");
      console.log("Error");
    });
});

module.exports = router;
