const { writeFile, readFile } = require("fs/promises");
const path = require("path");

async function getUsers() {
  const value = JSON.parse(
    await readFile(path.resolve(__dirname, "../data/users.json"))
  );
  return value;
}

async function getUserById(userId) {
  const currentUsers = await getUsers();
  const existingUser = currentUsers.find((userEx) => userEx.id === userId);

  return existingUser;
}

async function setUser(user) {
  const value = JSON.stringify(user);
  await writeFile(path.resolve(__dirname, "../data/users.json"), value);
}

async function register(user) {
  const currentUsers = await getUsers();
  const existingUser = currentUsers.find(
    (userEx) => userEx.username === user.username
  );
  if (!existingUser) {
    user.id = btoa(Math.random());
    currentUsers.push(user);
    await setUser(currentUsers);
    return user;
  } else {
    return null;
  }
}
async function removeUser(userToDelete) {
  const currentUsers = await getUsers();
  let newUsers = currentUsers.filter((user) => user.id !== userToDelete);

  await setUser(newUsers);
  return newUsers;
}
// function checking user

async function login(loginUser) {
  const allUsersData = await getUsers();
  const matchUser = allUsersData.find(
    (user) =>
      user.username === loginUser.username &&
      user.password === loginUser.password
  );
  console.log("user", matchUser);
  let userInfo = {};
  if (matchUser) {
    userInfo.id = matchUser.id;
    userInfo.admin = matchUser.admin;
  }

  return userInfo;
}

module.exports = {
  register,
  login,
  getUserById,
  getUsers,
  removeUser,
};
