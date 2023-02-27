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

function getUserById(req, res) {}

function getUsers(req, res) {
  const users = res.body;
  res.json(userService.getUsers(users));
}

module.exports = { register, login, getUserById, getUsers };
