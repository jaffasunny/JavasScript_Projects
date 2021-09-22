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

		var editBtn = document.createElement('button');
		var editText = document.createTextNode('EDIT');
		editBtn.setAttribute('class','btn');
		editBtn.className += ' ml-1';
		editBtn.setAttribute('onclick','editItem(this)');
		editBtn.appendChild(editText);
		li.appendChild(editBtn);

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

function editItem(btn){
	var prompt_val = btn.parentNode.firstChild.nodeValue;
	var editValue = prompt("Enter the edit value", prompt_val);
	btn.parentNode.firstChild.nodeValue = editValue;
}