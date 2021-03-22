const address = {
	street: "a",
	city: "b",
	zipCode: 12455
}

function showAddress(address) {
	for (let i in address) {
		console.log(i,":", address[i]);
	}
}

showAddress(address);