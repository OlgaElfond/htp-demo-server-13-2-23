module.exports = function (app) {
  const userService = require("../controllers/controllers-user");

  app.post("/api/users/", userService.register);

  app.get("/api/users/", userService.login);

  app.get("/api/users/all", userService.getUsers);
};
