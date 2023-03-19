const userService = require("../services/users");

async function loginUserAutorizathion(req, res, next) {
  const userInfo = req.cookies["userInfo"];
  if (!userInfo) {
    return res.status(403).send("Access denied.");
  } else {
    let userInfoCookiesObject = JSON.parse(userInfo);
    if (await userService.getUserById(userInfoCookiesObject.id)) {
      next();
    } else {
      console.log("jjj");
      return res.status(403).send("Access denied.");
    }
  }
}

async function loginAdminAutorizathion(req, res, next) {
  const userInfo = req.cookies["userInfo"];
  if (!userInfo) {
    return res.status(403).send("Access denied.");
  } else {
    let userInfoCookiesObject = JSON.parse(userInfo);
    let user = await userService.getUserById(userInfoCookiesObject.id);
    if (user.admin) {
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
