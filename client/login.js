const loginButton = document.querySelector(".loginButton");
const rememberUser = document.querySelector(".remember-me");

loginButton.addEventListener("click", loginToTodosServer);

async function loginToTodosServer() {
  const username = document.querySelector("#txtUsername").value;
  const password = document.querySelector("#txtPassword").value;
  const tempCredentials = { username, password };

  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tempCredentials),
  });

  if (response.status === 200) {
    document.location = "./todos-index.html";
  }
  return response;
}
