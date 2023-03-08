const loginButton = document.querySelector(".loginButton");
loginButton.addEventListener("click", loginToTodosServer);

async function loginToTodosServer() {
  const response = await fetch("http://localhost:3000/api/login");
}
