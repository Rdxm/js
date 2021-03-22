const numbers = [1,2,4];

const output = sum(numbers);
console.log(output);

function sum(...array) {
	if (array.length === 1 && Array.isArray(array[0]))
		array = [...array[0]];
	return array.reduce((a, b) => a+b);
}