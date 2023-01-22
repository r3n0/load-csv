let data;
let columns;

function preload() {
	data = loadTable('./src/30canciones.csv', 'csv', 'header');
}
function setup() {
	createCanvas(windowWidth, windowHeight, SVG);
	const rowCount = data.getRowCount();
}

function draw() {
	background(255);
	strokeWeight(5);
	circle(mouseX, mouseY, 20);
	let margin = 200;
	let celWidth = (width - margin) / data.columns.length;
	let celHeight = (height - margin) / data.rows.length;

	for (let j = 0; j < data.columns.length; j++) {
		const x = j * celWidth + margin / 2;
		// print(data.columns[j]);
		const c = color(random(0, 255), random(100, 255), 0, 100);
		stroke(c);
		push();
		translate(x, height - 20);
		rotate(-0.5);
		// noStroke();
		// text(data.columns[j].slice(0, 20), 0, 0);
		pop();
		for (let i = 0; i < data.rows.length; i++) {
			const count = data.rows[i].obj[data.columns[j]];
			const value = count ? int(count) / 50000 : 0;

			const y = i * celHeight + margin / 2;

			// text(int(value), x, y);
			for (let k = 0; k < value; k++) {
				const v = p5.Vector.random2D();
				v.setMag(value / 3 / random(0.9, 1.3));
				push();
				translate(x, y);
				line(0, 0, v.x, v.y);
				pop();
			}
		}
	}
	save('mySVG.svg');

	noLoop();
}
