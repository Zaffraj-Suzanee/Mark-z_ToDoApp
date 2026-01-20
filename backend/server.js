const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/todo.routes.js");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("Backend running on http://localhost:${PORT}");
});