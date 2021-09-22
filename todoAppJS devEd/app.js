// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// Functions
function addTodo(event){
    // Prevent Form from reloading
    event.preventDefault();
    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create Li
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Completed Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(todoDiv);
    // Clear Input Value
    todoInput.value = '';
}

function deleteCheck(e){
    e.preventDefault();
    const item = e.target;
    // DELETE TODO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // ANIMATION
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    // CHECK MARK TODO
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}