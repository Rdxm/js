// circle.radius --> read/write
// circle.area  --> read-only

const circle = {
	radius: 2,
	get area() {
		return Math.PI * this.radius * this.radius;
	}
};

console.log(circle);