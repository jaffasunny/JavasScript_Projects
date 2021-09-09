var ul = document.getElementById("added-todos");

function addTodo() {
	var todo_item = document.getElementById("todo-item");
	if (todo_item.value !== "") {
		var li = document.createElement("li");
		var li_text = document.createTextNode(todo_item.value);
		li.appendChild(li_text);

		var delBtn = document.createElement('button');
		var delText = document.createTextNode('DELETE');
		delBtn.setAttribute('class','btn');
		delBtn.setAttribute('onclick','deleteItem(this)');
		delBtn.appendChild(delText);
		li.appendChild(delBtn);

		ul.appendChild(li);

		todo_item.value = "";
	}
}

function deleteItem(btn){
	btn.parentNode.remove();
}

function deleteAll(){
	ul.innerHTML = '';
}