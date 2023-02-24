const { readFileSync, writeFileSync } = require("fs");
const path = require("path"); //

function getUser() {
  const value = JSON.parse(
    // __dirname environment param
    readFileSync(path.resolve(__dirname, "../../users.json"))
  );
  return value;
}
//1 function create new user

function setUser(user) {
  const value = JSON.stringify(user);
  writeFileSync("./users.json", value);
}
// register
function register(user) {
  const currentUsers = getUser();
  const existingUser = currentUsers.find(
    (userEx) => userEx.username === user.username
  );
  if (!existingUser) {
    user.id = btoa(Math.random());
    currentUsers.push(user);
    setUser(currentUsers);
    return user;
  } else {
    return null;
  }
}
//2 function checking user

function login(loginUser) {
  const allUsersData = getUser();
  const matchUser = allUsersData.find(
    (user) =>
      user.username === loginUser.username &&
      user.password === loginUser.password
  );
  console.log("user", matchUser);
  return matchUser;
}

module.exports = {
  register,
  login,
};
