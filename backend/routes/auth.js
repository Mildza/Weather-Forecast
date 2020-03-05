const express = require("express");
const router = express.Router();

const defaultUser = { username: "admins", password: "123456" };

router.post("/", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === defaultUser.username && password === defaultUser.password) {
    res.send({ status: 200, message: `Wellcome ${username}` });
  } else {
    res.send({ status: 401, message: "Wrong credentials!" });
  }
});

module.exports = router;
