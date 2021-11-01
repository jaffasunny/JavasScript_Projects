var ul = document.getElementById("added-todos");

function addItem(event) {
	event.preventDefault();
	let text = document.getElementById("todo-input");
	db.collection("todo-items").add({
		text: text.value,
		status: "active",
	});
	text.value = "";
	// New es6 syntax
	// let todo_input = document.getElementById("todo-item");
	// let ul = document.getElementById("added-todos");

	// // console.log(todo_input.value);
	// if (todo_input.value !== "") {
	// 	let todo = `
	// 	<li>
	// 		<strong>${todo_input.value}</strong>
	// 		<button class='btn' onclick=deleteItem(this)>Delete</button>
	// 		<button class='btn' onclick=deleteItem(this)>Edit</button>
	// 	</li>
	// 	`;
	// 	ul.innerHTML += todo;
	// 	todo_input.value = "";
	// }
}

function getItems() {
	db.collection("todo-items").onSnapshot((snapshot) => {
		let items = [];
		snapshot.docs.forEach((doc) => {
			items.push({
				id: doc.id,
				...doc.data(),
			});
		});
		generateItems(items);
	});
}

function generateItems(items) {
	let itemsHtml = "";
	items.forEach((item) => {
		itemsHtml += `
			<div class="todo-item">
                <div class="check">
                    <div data-id="${item.id}" class="check-mark ${item.status == "completed" ? "checked" : ""}">
                        <img src="./assets/icon-check.svg" alt="">
                    </div>
                </div>
                <div class="todo-text ${item.status == "completed" ? "checked" : ""}">
                    ${item.text}
                </div>
            </div>
		`;
	});
	document.querySelector(".todo-items").innerHTML = itemsHtml;
	createEventListeners();
}

getItems();

function createEventListeners() {
	let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
	todoCheckMarks.forEach((checkMark) => {
		checkMark.addEventListener("click", function () {
			markCompleted(checkMark.dataset.id);
		});
	});
}

function markCompleted(id) {
	let item = db.collection("todo-items").doc(id);
	item.get().then((doc) => {
		if (doc.exists) {
			let status = doc.data().status;
			if (status == "active") {
				item.update({
					status: "completed",
				});
			} else if (status == "completed") {
				item.update({
					status: "active",
				});
			}
			console.log("Here is the doc", doc.data());
		}
	});
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
