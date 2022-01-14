'use strict';
const controller = require('../server/src/todos-controller');

document.addEventListener('DOMContentLoaded', () => {
  const addForm = document.querySelector('.adding__form'),
    addInput = document.querySelector('.adding__todo'),
    todoList = document.querySelector('.todo__list');

  let todoArr = [];

  function clearTodo(list) {
    list.innerHTML = '';
  }
  clearTodo(todoList);

  function createTodoList(todos, parent) {
    clearTodo(parent);

    todos.forEach((todo) => {
      parent.innerHTML += `
                <li class="todo__item">
                    ${todo}
                    <div class="todo__item_tools">
                        <div class="todo__item_checkbox"><i class="far fa-check-circle"></i></div>
                        <div class="trash__btn"><i class="far fa-trash-alt"></i></div>
                    </div>
                </li>
            `;
    });
  }

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = addInput.value;

    if (newTodo) {
      controller.createTodos();
      createTodoList(todoArr, todoList);
    }

    addForm.reset();
  });

  todoList.addEventListener('click', (e) => {
    const target = e.target;
    const todo = target.parentElement.parentElement;

    if (target && target.classList[0] === 'trash__btn') {
      todo.remove();
      todoArr.forEach((i) => {
        todoArr.splice(i, 1);
      });
    }

    if (target && target.classList[0] === 'todo__item_checkbox') {
      todo.classList.toggle('checked');
    }
  });
});
