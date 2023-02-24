// function getTodosFromServer() {
//   return fetch("http://localhost:3000/api/todos/")
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// }

async function getTodosFromServerAsync() {
  const response = await fetch("http://localhost:3000/api/todos/", {});
  const todos = await response.json();
  //console.log(todos);
  return todos;
}

async function showTodos() {
  //getTodosFromServer().then((returntodosdata) => console.log(returntodosdata));
  let dataList = await getTodosFromServerAsync();
  //console.log(data);
  //return each object
  let table = document.querySelector("#tabelTodos");
  dataList.forEach((todo) => {
    let tr = createDataRow(todo);
    table.append(tr);
  });
}

function createDataRow(todoObject) {
  //create tr
  //for each property of object create td with data
  // add td to tr
  //add tr to table
  //console.log(todoObject);
  let tr = document.createElement("tr");
  for (const prop in todoObject) {
    if (Object.hasOwn(todoObject, prop)) {
      let td = document.createElement("td");
      td.textContent = todoObject[prop];
      tr.append(td);
    }
  }
  return tr;
}
showTodos();
