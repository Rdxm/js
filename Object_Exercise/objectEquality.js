let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// make a new variable ponting to address 1 
let address3 = address1;
console.log(areSame(address1, address3)); // => gives true because both are referencing to same object in memory

function Address(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

function areEqual(address1, address2) {
	return address1.street === address2.street &&
		address1.city === address2.city &&
		address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
	return address1 === address2;
}