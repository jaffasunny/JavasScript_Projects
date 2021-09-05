var ul = document.getElementById("added-todos");

function addTodo() {
	var todo_item = document.getElementById("todo-item");
	if (todo_item.value !== "") {
		var li = document.createElement("li");
		var li_text = document.createTextNode(todo_item.value);

		li.appendChild(li_text);
		ul.appendChild(li);

		todo_item.value = "";
	}
}
