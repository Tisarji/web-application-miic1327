var nameReal;
let age;
var isOlderThan18;

var numberArray = [];

var numberArrayMaxMin = [];

// --- Exercise 1 ---

function checkAge(age) {
	if (age >= 18)
		isOlderThan18 = true;
	else
		isOlderThan18 = false;
	return isOlderThan18;
}

function submitCheck() {
	nameReal = document.getElementById("nameReal").value;
	age = document.getElementById("age").value;

	checkAge(age);
	if (isOlderThan18)
		alert("Hello " + nameReal + " you are older than 18");
	else
		alert("Hello " + nameReal + " you are not older than 18");
}

// --- Exercise 2 ---

function updateShowNumber() {
	const showNumberElement = document.getElementById("showNumber");
	showNumberElement.textContent = numberArray.join(", ");
}

function getNumber() {
	const number = parseFloat(prompt("Please enter a number:"));

	if (!isNaN(number)) {
		numberArray.push(number);
		updateShowNumber();
	} else {
		alert("Please enter a valid number.");
	}
}

function calculateAverage() {
	let sum = 0;

	for (let i = 0; i < numberArray.length; i++)
		sum += numberArray[i];
	const average = sum / numberArray.length;
	document.getElementById("average").textContent = average.toFixed(2);
}

// --- Exercise 3 ---

function getNumberMaxMin() {
	const number = parseFloat(prompt("Please enter a number:"));

	if (!isNaN(number)) {
		numberArrayMaxMin.push(number);
		updateShowNumberMaxMin();

		const max = Math.max(...numberArrayMaxMin);
		const min = Math.min(...numberArrayMaxMin);

		document.getElementById("maxNumber").textContent = max;
		document.getElementById("minNumber").textContent = min;
	} else {
		alert("Please enter a valid number.");
	}
}

function updateShowNumberMaxMin() {
	const showNumberMaxMinElement = document.getElementById("showNumberMaxMin");
	showNumberMaxMinElement.textContent = numberArrayMaxMin.join(", ");
}


// --- Exercise 4 ---

let products = [];

function addProduct(name, price, quantity) {
	const product = {
		name: name,
		price: price,
		quantity: quantity
	};
	products.push(product);
	displayProducts();
}

function displayProducts() {
	const tableBody = document.getElementById("productTableBody");
	tableBody.innerHTML = "";

	products.forEach(product => {
		const row = document.createElement("tr");
		
		const nameCell = document.createElement("td");
		nameCell.textContent = product.name;
		row.appendChild(nameCell);
		
		const priceCell = document.createElement("td");
		priceCell.textContent = product.price;
		row.appendChild(priceCell);
		
		const quantityCell = document.createElement("td");
		quantityCell.textContent = product.quantity;
		row.appendChild(quantityCell);

		tableBody.appendChild(row);
	});
}

function handleFormSubmit(event) {
	event.preventDefault();

	const name = document.getElementById("productName").value;
	const price = parseFloat(document.getElementById("productPrice").value);
	const quantity = parseInt(document.getElementById("productQuantity").value);

	if (name && !isNaN(price) && !isNaN(quantity)) {
		addProduct(name, price, quantity);
		document.getElementById("productForm").reset();
	} else {
		alert("Please enter valid product details.");
	}
}
