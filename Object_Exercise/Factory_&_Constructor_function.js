let address1 = new Address("a", "b", "c");
let address2 = createAddress("a", "b", "c");
console.log(address1);
console.log(address2);

// Factory Function

function createAddress(street, city, zipCode) {
	return {
		street,        // if Key and value are same we can write it like this
		city,
		zipCode
	};
}


// Constructor Function

function Address(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}



