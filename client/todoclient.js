function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

async function getTodosFromServerAsync() {
  let userInfoCookiesObject = JSON.parse(
    decodeURIComponent(getCookie("userInfo"))
  );

  let url = "http://localhost:3000/api/todos";

  if (userInfoCookiesObject.admin) {
    url = "http://localhost:3000/api/todos/all";
  }
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const todos = await response.json();
  return todos;
}

async function showTodos() {
  //getTodosFromServer().then((returntodosdata) => console.log(returntodosdata));
  let dataList = await getTodosFromServerAsync();
  //return each object
  let table = document.querySelector("#tabelTodos");
  dataList.forEach((todo) => {
    let tr = createDataRow(todo);
    table.append(tr);
  });
}

function createDataRow(todoObject) {
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
