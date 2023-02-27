module.exports = function (app) {
  const userService = require("../controllers/controllers-user");

  app.post("/api/register", userService.register);

  app.post("/api/login", userService.login);

  //app.get("/api/users/all", userService.getUsers);
};
