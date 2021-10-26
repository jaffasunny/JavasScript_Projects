function divEdit(element) {
	let divValue = prompt("Please Enter Div Text");
	if (element.innerText == null) {
		if (divValue != null) {
			element.innerText = divValue;
		}
	} else {
		if (divValue != null) {
			element.innerText += " " + divValue;
		}
	}
}
