const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const toDosRoutes = require("./server/routes/routes-todos"); // function overload app
const userRoutes = require("./server/routes/routes-users");

//const todosRouter = require("./server/routes/routes-todos copy.js"); // router function express

app.use(express.json());
var corsOptions = {
  origin: "http://localhost:5501",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());

//app.use(todosRouter); // router function express

toDosRoutes(app); // function overload app

userRoutes(app);

app.listen(3000, () => console.log("app is running"));
