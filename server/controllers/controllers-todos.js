const todosService = require("../services/todo");

function getTodosByUserId(req, res) {
  const { userId } = req.params;
  const todos = todosService.getTodosByUserId(userId);
  res.json(todos);
  console.log(req.query);
}

function deleteTodo(req, res) {
  const { id } = req.params;
  res.json(todosService.deleteTodo(id));
}

function updateTodo(req, res) {
  const { id } = req.params;
  let todoToUpdate = req.body;
  console.log(todoToUpdate);
  res.json(todosService.updateTodo(id, todoToUpdate));
}

function addTodo(req, res) {
  let toDo = req.body;
  console.log(toDo);
  res.json(todosService.addTodo(toDo));
}
module.exports = { getTodosByUserId, deleteTodo, updateTodo, addTodo };