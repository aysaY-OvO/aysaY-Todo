document.addEventListener('DOMContentLoaded', () => {
    const addForm = document.querySelector('.adding__form'),
        addInput = document.querySelector('.adding__todo'),
        todoList = document.querySelector('.todo__list');

    //Event Listeners
    addForm.addEventListener('submit', createTodo);
    todoList.addEventListener('click', deleteCheck);

    function createTodo() {
        event.preventDefault();
        const todoValue = addInput.value;

        const todo = document.createElement('li');
        todo.classList.add('todo__item');
        todo.append(todoValue);

        const todoTools = document.createElement('div');
        todoTools.classList.add('todo__item_tools');

        //Create checkbox
        const checkBox = document.createElement('div');
        checkBox.classList.add('todo__item_checkbox');
        const checkBoxIcon = document.createElement('i');
        checkBoxIcon.classList.add('far', 'fa-check-circle');
        checkBox.append(checkBoxIcon);

        //Create trash button
        const trashBtn = document.createElement('div');
        trashBtn.classList.add('trash__btn');
        const trashCan = document.createElement('i');
        trashCan.classList.add('far', 'fa-trash-alt');
        trashBtn.append(trashCan);

        todoTools.append(trashBtn);
        todoTools.append(checkBox);
        todo.append(todoTools);
        todoList.append(todo);
        addForm.reset();
    }

    function deleteCheck() {
        const target = event.target;
        const todo = target.parentElement.parentElement;

        if (target && target.classList[0] === 'trash__btn') {
            todo.remove();
        }
        if (target && target.classList[0] === 'todo__item_checkbox') {
            todo.classList.toggle('checked');
        }
    }

});


