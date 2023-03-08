const userService = require("../services/users");

async function loginUserAutorizathion(req, res, next) {
  const userId = req.header("userautorizathion");
  console.log(userId);
  if (!userId) {
    return res.status(403).send("Access denied.");
  } else {
    if (await userService.getUserById(userId)) {
      next();
    } else {
      console.log("jjj");
      return res.status(403).send("Access denied.");
    }
  }
}

async function loginAdminAutorizathion(req, res, next) {
  const userId = req.header("userautorizathion");
  if (!userId) {
    return res.status(403).send("Access denied.");
  } else {
    let isAdmin = await userService.getUserById(userId);
    if (isAdmin.admin) {
      next();
    } else {
      console.log("jjj");
      return res.status(403).send("Access denied!");
    }
  }
}

module.exports = {
  loginAdminAutorizathion,
  loginUserAutorizathion,
};
