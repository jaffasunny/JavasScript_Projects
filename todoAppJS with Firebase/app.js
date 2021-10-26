var ul = document.getElementById("added-todos");

function addTodo() {
	// Old es5 syntax
	// var todo_item = document.getElementById("todo-item");
	// if (todo_item.value !== "") {
	// 	var li = document.createElement("li");
	// 	var li_text = document.createTextNode(todo_item.value);
	// 	li.appendChild(li_text);
	// 	var delBtn = document.createElement('button');
	// 	var delText = document.createTextNode('DELETE');
	// 	delBtn.setAttribute('class','btn');
	// 	delBtn.setAttribute('onclick','deleteItem(this)');
	// 	delBtn.appendChild(delText);
	// 	li.appendChild(delBtn);
	// 	var editBtn = document.createElement('button');
	// 	var editText = document.createTextNode('EDIT');
	// 	editBtn.setAttribute('class','btn');
	// 	editBtn.className += ' ml-1';
	// 	editBtn.setAttribute('onclick','editItem(this)');
	// 	editBtn.appendChild(editText);
	// 	li.appendChild(editBtn);
	// 	ul.appendChild(li);
	// 	todo_item.value = "";
	// }

	// New es6 syntax
	let todo_input = document.getElementById("todo-item");
	let ul = document.getElementById("added-todos");

	// console.log(todos);
	if (todo_input.value !== "") {
		let todo = `
		<li>
			${todo_input.value}
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
