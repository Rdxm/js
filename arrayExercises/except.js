const numbers = [1,2,3,4,1,1];

const output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
	const ans = [];
	for (let i of array) {
		for (let j of excluded) {
			if (!(i === j)) {
				ans.push(i);
			}
		}
	}
	return ans;
}