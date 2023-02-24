//copy from idex.js

module.exports = function (app) {
  // const {
  //   getTodos,
  //   addTodo,
  //   deleteTodo,
  //   updateTodo,
  // } = require("../services/todos-david.js");  ---- delete if its work

  // fix cors error-------------------------------------------------------------------------------
  // app.use(function (req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*"); ////////// update to match the domain you will make the request from
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept"
  //   );
  //   next();
  // });

  const auth = require("../middleware/auth");

  const todosController = require("../controllers/controllers-todos");

  app.get("/api/todos/", auth, todosController.getTodosByUserId);

  app.delete("/api/todos/:id", todosController.deleteTodo);

  app.put("/api/todos/:id", auth, todosController.updateTodo);

  // app.put("/api/todos/:id", (req, res) => {
  //   const { id } = req.params;
  //   const { keyToUpdate, value } = req.body;
  //   res.json(updateTodo(id, keyToUpdate, value));
  // });

  app.post("/api/todos/", todosController.addTodo);
};
