const numbers = [4,2,5,1,8,4,3];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
	if (array.length === 0) return undefined;
	let max = array[0];
	for (let i of array) {
		if (i > max) {
			max = i;
		}
	}
	return max;

	// using reduce method

	return array.reduce((accumulator, current) => 
		return = (current > accumulator) ? current : accumulator);
}

// if reduce dont't get second argument it takes first element of array => accumulator;
// accumulator is just a keyword , can use anything