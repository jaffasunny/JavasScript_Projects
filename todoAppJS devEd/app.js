// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

// Functions
function addTodo(event) {
	// Prevent Form from reloading
	event.preventDefault();
	// Todo Div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	// create Li
	const newTodo = document.createElement("li");
	newTodo.innerHTML = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);
	// Completed Button
	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);
	// Trash Button
	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);

	// APPEND TO LIST
	todoList.appendChild(todoDiv);
	// Clear Input Value
	todoInput.value = "";
}

function deleteCheck(e) {
	e.preventDefault();
	const item = e.target;
	// DELETE TODO
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		// ANIMATION
		todo.classList.add("fall");
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	}
	// CHECK MARK TODO
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

function filterTodo(e) {
	const todos = todoList.childNodes;

	todos.forEach(function (todo) {
		if (todo.classList !== undefined) {
			switch (e.target.value) {
				case "all":
					todo.style.display = "flex";
					break;
				case "completed":
					if (todo.classList.contains("completed")) {
						todo.style.display = "flex";
					} else {
						todo.style.display = "none";
					}
					break;
				case "uncompleted":
					if (!todo.classList.contains("completed")) {
						todo.style.display = "flex";
					} else {
						todo.style.display = "none";
					}
					break;
			}
		}
	});
}
