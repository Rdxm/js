const numbers = [1,2,3,4,1,2,6,1];

const count = countOccurences(numbers, 1);
console.log(count);

function countOccurences(array, searchElement) {
	let count = 0;
	for (let i of array) {
		if (i === searchElement) {
			count++;
		}
	}
	return count;

	// using Reduce Method
	return array.reduce((accumulator, current) => {
		const occurence = (current === searchElement) ? 1 : 0;
		return occurence + accumulator;
	}, 0);
}