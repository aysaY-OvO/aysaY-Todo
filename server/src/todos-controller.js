const Todo = require('../src/todoModel');

const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
};

const createTodos = async (req, res) => {
  const todos = await Todo.create(req.body);
  res.send(todos);
};

module.exports = {
  getTodos,
  createTodos,
};
