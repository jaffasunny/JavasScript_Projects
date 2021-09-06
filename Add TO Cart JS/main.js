let carts = document.querySelectorAll(".add-cart");

let products = [
	{
		name: "Son of a Bun",
		price: 599,
		incart: 0,
	},
	{
		name: "Tickle Burger",
		price: 495,
		incart: 0,
	},
	{
		name: "Rootin Tootin Shroomin",
		price: 499,
		incart: 0,
	},
];

for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		cartNumbers(products[i]);
		totalCost(products[i]);
	});
}

function cartNumbers(product) {
	let productNumbers = localStorage.getItem("cartNumbers");
	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem("cartNumbers", productNumbers + 1);
		document.querySelector("#navbarSupportedContent span").textContent =
			productNumbers + 1;
	} else {
		localStorage.setItem("cartNumbers", 1);
		document.querySelector("#navbarSupportedContent span").textContent = 1;
	}

	setItems(product);
}

function onLoadCartNumbers() {
	let productNumbers = localStorage.getItem("cartNumbers");
	if (productNumbers) {
		document.querySelector("#navbarSupportedContent span").textContent =
			productNumbers;
	}
}

function setItems(product) {
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	console.log("My cartItems are ", cartItems);

	if (cartItems != null) {
		if (cartItems[product.name] == undefined) {
			cartItems = {
				...cartItems,
				[product.name]: product,
			};
		}
		cartItems[product.name].incart += 1;
	} else {
		product.incart = 1;
		cartItems = {
			[product.name]: product,
		};
	}

	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
	let cartCost = localStorage.getItem("totalCost");

	if (cartCost != null) {
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	} else {
		localStorage.setItem("totalCost", product.price);
	}
}

function displayCart() {
	let cartCost = localStorage.getItem("totalCost");
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	let product_Cart = document.querySelector(".products");
	console.log(cartItems)
	if (cartItems && product_Cart) {
		product_Cart.innerHTML = "";
		Object.values(cartItems).map((item) => {
			product_Cart.innerHTML += `
            <div class="product">
				<h5 class="product-title">
					<i onclick="return this.parentNode.parentNode.remove();" class="bi bi-x-circle-fill mr-3"></i>
					<img class="mr-3" src="./images/${item.name}.jpeg">
					<span>${item.name}</span>
				</h5>
				<div class="price">$${item.price},00</div>
            	<div class="quantity">
            	    <i class="bi bi-caret-left-square-fill mr-3"></i>
            	    <span>${item.incart}</span>
            	    <i class="bi bi-arrow-right-square-fill ml-3"></i>
            	</div>
            	<div class="total">
            	    $${item.incart * item.price},00
            	</div>
			</div>
            `;
		});
		product_Cart.innerHTML += `
		<div class="basketTotalContainer">
			<h4 class="basketTotalTitle">Basket Total</h4>
			<h4 class="basketTotal">$${cartCost},00</h4>
		</div>
		`
	}
}



onLoadCartNumbers();
displayCart();
