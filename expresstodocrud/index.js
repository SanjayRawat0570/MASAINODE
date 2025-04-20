const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

const readTodos = () => {
  const data = fs.readFileSync('db.json', 'utf-8');
  return JSON.parse(data).todos;
};

const writeTodos = (todos) => {
  fs.writeFileSync('db.json', JSON.stringify({ todos }, null, 2));
};

// Get all todos
app.get('/todos', (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const todos = readTodos();
  const newTodo = { id: Date.now(), ...req.body };
  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

// Update status of even-ID todos from false to true
app.patch('/todos/update-status', (req, res) => {
  let todos = readTodos();
  let updated = [];

  todos = todos.map(todo => {
    if (todo.id % 2 === 0 && todo.status === false) {
      todo.status = true;
      updated.push(todo.id);
    }
    return todo;
  });

  writeTodos(todos);
  res.json({ message: 'Updated todos', updated });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
