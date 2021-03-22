const numbers = [1,2,3,4];
const result = includes(numbers, 2);
console.log(result);

function includes(array, searchElement) {
	for (let i of array) {
		if (i === searchElement)
			return true;
	}
	return false;
} 