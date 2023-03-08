const userService = require("../services/users");

async function register(req, res) {
  const user = req.body;
  const newUserInfo = await userService.register(user);
  if (newUserInfo) {
    res.json(newUserInfo.name, newUserInfo.id);
  } else {
    //res.status(409).send("Status: Conflict");
    res.status(409).json({ message: "conflict" });
  }
}

async function login(req, res) {
  const loginDetails = req.body;
  const userInfo = await userService.login(loginDetails);
  if (userInfo) {
    res.json(userInfo);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

async function getUsers(req, res) {
  const users = res.body;
  res.json(await userService.getUsers(users));
}

async function removeUser(req, res) {
  const { id } = req.params;
  res.json(await userService.removeUser(id));
}

module.exports = { register, login, getUsers, removeUser };
