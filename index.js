const express = require("express");
const app = express();
const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("./server/services/todos-david.js");

const todosroutes = require("./server/routes/routes-todos");
app.use(express.json());

let cors = require("cors");
app.use(cors());

// copy to routes-todos

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/todos", function (req, res) {
  const todos = getTodos();
  res.json(todos);
  console.log(req.query);
});
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  res.json(deleteTodo(id));
});
app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  let todoToUpdate = req.body;
  console.log(todoToUpdate);
  res.json(updateTodo(id, todoToUpdate));
});

// app.put("/api/todos/:id", (req, res) => {
//   const { id } = req.params;
//   const { keyToUpdate, value } = req.body;
//   res.json(updateTodo(id, keyToUpdate, value));
// });

app.post("/api/todos/", (req, res) => {
  let toDo = req.body;
  console.log(toDo);
  res.json(addTodo(toDo));
});

todosroutes(app);
app.listen(3000, () => console.log("app is running"));
