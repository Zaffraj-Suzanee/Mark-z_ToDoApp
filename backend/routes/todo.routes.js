const express = require("express");
const router = express.Router();
const controller = require("../controllers/todo.controller");

router.get("/", controller.getTodos);
router.post("/", controller.addTodo);
router.put("/:id", controller.toggleTodo);
router.delete("/:id", controller.deleteTodo);

module.exports = router;