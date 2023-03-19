const { readFile, writeFile } = require("fs/promises");
const path = require("path");

// read the file todos and return an array of todos
async function getTodos() {
  const value = JSON.parse(
    await readFile(path.resolve(__dirname, "../data/data.json"))
  );

  return value;
}

// new function return todos by user id
async function getTodosByUserId(userId) {
  const value = JSON.parse(
    await readFile(path.resolve(__dirname, "../data/data.json"))
  ).filter((todo) => todo.userId === userId);

  return value;
}

async function setTodos(todos) {
  const value = JSON.stringify(todos);
  await writeFile(path.resolve(__dirname, "../data/data.json"), value);
}

async function addTodo(toDo) {
  const currentTodos = await getTodos();
  toDo.id = btoa(Math.random());
  currentTodos.push(toDo);
  await setTodos(currentTodos);
}

async function deleteTodo(id) {
  const currentTodos = await getTodos();
  const filteredTodos = currentTodos.filter((todo) => todo.id !== id);
  await setTodos(filteredTodos);
}

// function updateTodo(id, keyToUpdate = "title", value) {
//   const currentTodos = getTodos();
//   todoToUpdate = currentTodos.find((todo) => todo.id === id);
//   if (todoToUpdate) {
//     todoToUpdate[keyToUpdate] = value;
//     setTodos(currentTodos);
//   }
// }

async function updateTodo(id, newObjData) {
  const currentTodos = await getTodos();
  let todoToUpdate = currentTodos.find((todo) => todo.id === id);
  console.log("ggg", todoToUpdate);
  console.log("fff", newObjData);
  if (todoToUpdate) {
    Object.assign(todoToUpdate, newObjData);
    await setTodos(currentTodos);
  }
}

module.exports = {
  getTodosByUserId,
  addTodo,
  deleteTodo,
  updateTodo,
  getTodos,
};
