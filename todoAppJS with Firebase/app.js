var ul = document.getElementById("added-todos");

function addItem(event) {
	event.preventDefault();
	// New es6 syntax
	let todo_input = document.getElementById("todo-item");
	let ul = document.getElementById("added-todos");

	// console.log(todo_input.value);
	if (todo_input.value !== "") {
		let todo = `
		<li>
			<strong>${todo_input.value}</strong>
			<button class='btn' onclick=deleteItem(this)>Delete</button>
			<button class='btn' onclick=deleteItem(this)>Edit</button>
		</li>
		`;
		ul.innerHTML += todo;
		todo_input.value = "";
	}
}

function deleteItem(btn) {
	btn.parentNode.remove();
}

function deleteAll() {
	ul.innerHTML = "";
}

function editItem(btn) {
	var prompt_val = btn.parentNode.firstChild.nodeValue;
	var editValue = prompt("Enter the edit value", prompt_val);
	btn.parentNode.firstChild.nodeValue = editValue;
}
