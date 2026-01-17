let todos = []; // in-memory database

exports.getTodos = (req, res) => {
  res.json(todos);
};

exports.addTodo = (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  todos.push(todo);
  res.status(201).json(todo);
};

exports.toggleTodo = (req, res) => {
  const id = Number(req.params.id);
  todos = todos.map(todo =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
  res.json({ message: "Todo updated" });
};

exports.deleteTodo = (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: "Todo deleted" });
};