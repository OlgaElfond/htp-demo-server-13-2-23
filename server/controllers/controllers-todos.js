const todosService = require("../services/todo");

async function getTodos(req, res) {
  const todos = res.body;
   res.json( await todosService.getTodos(todos));
}

async function getTodosByUserId(req, res) {
  const userId = req.header("userautorizathion"); // postman headers userautorizathion = user id
  const todos = await todosService.getTodosByUserId(userId);
  res.json(todos);
}

async function deleteTodo(req, res) {
  const { id } = req.params;
  res.json(await todosService.deleteTodo(id));
}

async function updateTodo(req, res) {
  const { id } = req.params;
  const todoToUpdate = req.body;
  console.log(todoToUpdate);
  res.json(await todosService.updateTodo(id, todoToUpdate));
}

async function addTodo(req, res) {
  let toDo = req.body;
  console.log(toDo);
  const user = req.user; // add user id to new todo
  toDo.user = user.id; // add user id to new todo
  res.json(await todosService.addTodo(toDo));
}
module.exports = {
  getTodosByUserId,
  getTodos,
  deleteTodo,
  updateTodo,
  addTodo,
};
