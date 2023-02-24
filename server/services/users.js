const { readFileSync, writeFileSync } = require("fs");
const path = require("path"); //

function getUsers() {
  const value = JSON.parse(
    // __dirname environment param
    readFileSync(path.resolve(__dirname, "../../users.json"))
  );
  return value;
}
//1 function create new user

function getUserById(userId) {
  // get the user data
  const currentUsers = getUsers();
  //find user in user data
  const existingUser = currentUsers.find((userEx) => userEx.id === userId);
  console.log(existingUser);
  // return user
  return existingUser;
}

function setUser(user) {
  const value = JSON.stringify(user);
  writeFileSync("./users.json", value);
}

// register
function register(user) {
  const currentUsers = getUsers();
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
  const allUsersData = getUsers();
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
  getUserById,
};
