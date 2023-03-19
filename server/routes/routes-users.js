module.exports = function (app) {
  const { loginAdminAutorizathion } = require("../middleware/auth");

  const userService = require("../controllers/controllers-user");

  app.post("/api/register", userService.register);

  app.post("/api/login", userService.login);

  app.delete(
    "/api/delete/:id",
    loginAdminAutorizathion,
    userService.removeUser
  );
};
