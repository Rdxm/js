const numbers = [1,2,3,4];

const output = move(numbers, 2, -1);

console.log(output);

function move(array, index, offset) {
	position = index + offset;
	if (array.length <= position || position < 0) {
		console.error("Invalid Offset");
		return;
	}
	const output = [...array];
	const item = output.splice(index, 1)[0];
	output.splice(position, 0, item);
	return output;
}