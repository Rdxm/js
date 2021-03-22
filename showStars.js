showStars(5);

function showStars(rows) {
	for (let i=1; i<=rows; i++) {
		let output = ''
		for (let j=0; j<i; j++) {
			output += "*";
		}
		console.log(output);
	}
}