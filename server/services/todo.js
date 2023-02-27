const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

// read the file todos and return an array of todos
function getTodos() {
  const value = JSON.parse(
    readFileSync(path.resolve(__dirname, "../data/data.json"))
  );
  return value;
}

// new function return todos by user id
function getTodosByUserId(userId) {
  const value = JSON.parse(
    readFileSync(path.resolve(__dirname, "../data/data.json"))
  ).filter((todo) => todo.userId === userId);
  console.log(__dirname);
  return value;
}

function setTodos(todos) {
  const value = JSON.stringify(todos);
  writeFileSync(path.resolve(__dirname, "../data/data.json"), value);
}

function addTodo(toDo) {
  const currentTodos = getTodos();
  toDo.id = btoa(Math.random());
  currentTodos.push(
    toDo

    //   {
    //   id: btoa(Math.random()),
    //   title: "",
    //   description: "",
    //   user: "david",
    //   isDone: false,
    //   category: "",
    //   priority: 99,
    // }
  );
  setTodos(currentTodos);
}

function deleteTodo(id) {
  const currentTodos = getTodos();
  const filteredTodos = currentTodos.filter((todo) => todo.id !== id);
  setTodos(filteredTodos);
}

// function updateTodo(id, keyToUpdate = "title", value) {
//   const currentTodos = getTodos();
//   todoToUpdate = currentTodos.find((todo) => todo.id === id);
//   if (todoToUpdate) {
//     todoToUpdate[keyToUpdate] = value;
//     setTodos(currentTodos);
//   }
// }

function updateTodo(id, newObjData) {
  const currentTodos = getTodos();
  let todoToUpdate = currentTodos.find((todo) => todo.id === id);
  console.log("ggg", todoToUpdate);
  console.log("fff", newObjData);
  if (todoToUpdate) {
    Object.assign(todoToUpdate, newObjData);
    setTodos(currentTodos);
  }
}

module.exports = {
  getTodosByUserId,
  addTodo,
  deleteTodo,
  updateTodo,
};
