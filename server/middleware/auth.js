const userService = require("../services/users");

module.exports = (req, res, next) => {
  const userId = req.header("userautorizathion");
  console.log(userId);

  if (!userId) {
    return res.status(403).send("Access denied.");
  } else {
    if (userService.getUserById(userId)) {
      next();
    } else {
      return res.status(403).send("Access denied.");
    }
  }
};
