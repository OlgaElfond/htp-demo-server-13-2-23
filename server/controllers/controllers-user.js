const userService = require("../services/users");

function register(req, res) {
  const user = req.body;
  const newUserInfo = userService.register(user);
  if (newUserInfo) {
    res.json(newUserInfo);
  } else {
    res.status(409).send("Status: Conflict");
  }
}

function login(req, res) {
  const loginDetails = req.body;
  const userInfo = userService.login(loginDetails);
  if (userInfo) {
    res.json(userInfo);
  } else {
    res.status(401).send("Status: Unauthorized");
  }
}

module.exports = { register, login };
