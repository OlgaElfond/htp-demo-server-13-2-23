const {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("./server/services/todos-david.js");

// get the todos from getTodos() and display properly to the user
function displayTodos() {
  const todos = getTodos()
    .map(
      (item) => `${item.id}
        ${item.title}
        User: ${item.user}
        Category: ${item.category}
        Done? ${item.isDone ? "Yes" : "No"}
        priority: ${item.priority}`
    )
    .join("\n\n");

  console.log(todos);
}

const operation = process.argv[2];

if (operation === "create") {
  addTodo(process.argv[3]);
  console.log("added successfully");
} else if (operation === "update") {
  let newObjectValue = JSON.parse(process.argv[4]);
  console.log(newObjectValue);
  updateTodo(process.argv[3], newObjectValue);
  console.log("updated successfully");
} else if (operation === "delete") {
  deleteTodo(process.argv[3]);
  console.log("deleted successfully");
} else {
  displayTodos();
}
