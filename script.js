// Get all cells
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
	cell.addEventListener('click', () => {
		// Check if the cell is selectable
		if (!cell.classList.contains('unselectable')) {
			// Remove 'selected' class from all cells
			cells.forEach(c => c.classList.remove('selected'));
			// Add 'selected' class to the clicked cell
			cell.classList.add('selected');
		}
	});
});

let map = [];
map[0] = [0, 0, 0, 0];
map[1] = [0, 0, 0, 0];
map[2] = [0, 0, 0, 0];
map[3] = [0, 0, 0, 0]

const button1 = document.getElementById('btn1');
button1.addEventListener('click', () => {
	const selectedCell = document.querySelector('.selected');
	if (selectedCell)
		selectedCell.textContent = "1";
});

const button2 = document.getElementById('btn2');
button2.addEventListener('click', () => {
	const selectedCell = document.querySelector('.selected');
	if (selectedCell)
		selectedCell.textContent = "2";
});

const button3 = document.getElementById('btn3');
button3.addEventListener('click', () => {
	const selectedCell = document.querySelector('.selected');
	if (selectedCell)
		selectedCell.textContent = "3";
});

const button4 = document.getElementById('btn4');
button4.addEventListener('click', () => {
	const selectedCell = document.querySelector('.selected');
	if (selectedCell)
		selectedCell.textContent = "4";
});

const button5 = document.getElementById('btn5');
button5.addEventListener('click', () => {
	const selectedCell = document.querySelector('.selected');
	if (selectedCell)
		selectedCell.textContent = "";
});

function clearAllCells() {
	cells.forEach(cell => {
		cell.textContent = "";
	}
);
}

const newPuzzel = document.getElementById('newPuzzel');
newPuzzel.addEventListener('click', () => {

	clearAllCells();
	var correct = document.querySelector('.correct');
	var incorrect = document.querySelector('.incorrect');
	correct.style.display = "none";
	incorrect.style.display = "none";

	const a = document.querySelector('.cell:nth-child(2)');
	const b = document.querySelector('.cell:nth-child(3)');
	const c = document.querySelector('.cell:nth-child(4)');
	const d = document.querySelector('.cell:nth-child(5)');

	const e = document.querySelector('.cell:nth-child(7)');
	const f = document.querySelector('.cell:nth-child(13)');
	const g = document.querySelector('.cell:nth-child(19)');
	const h = document.querySelector('.cell:nth-child(25)');

	const i = document.querySelector('.cell:nth-child(12)');
	const j = document.querySelector('.cell:nth-child(18)');
	const k = document.querySelector('.cell:nth-child(24)');
	const l = document.querySelector('.cell:nth-child(30)');

	const n = document.querySelector('.cell:nth-child(32)');
	const o = document.querySelector('.cell:nth-child(33)');
	const p = document.querySelector('.cell:nth-child(34)');
	const m = document.querySelector('.cell:nth-child(35)');

	randomNumber = getRandomInt(0, 2);
	currentMap = randomNumber;

	a.textContent = mapArray[randomNumber][0];
	b.textContent = mapArray[randomNumber][1];
	c.textContent = mapArray[randomNumber][2];
	d.textContent = mapArray[randomNumber][3];
	e.textContent = mapArray[randomNumber][4];
	f.textContent = mapArray[randomNumber][5];
	g.textContent = mapArray[randomNumber][6];
	h.textContent = mapArray[randomNumber][7];
	i.textContent = mapArray[randomNumber][8];
	j.textContent = mapArray[randomNumber][9];
	k.textContent = mapArray[randomNumber][10];
	l.textContent = mapArray[randomNumber][11];
	n.textContent = mapArray[randomNumber][12];
	o.textContent = mapArray[randomNumber][13];
	p.textContent = mapArray[randomNumber][14];
	m.textContent = mapArray[randomNumber][15];
});

const checkPuzzel = document.getElementById('checkPuzzel');
checkPuzzel.addEventListener('click', () => {
	var correct = document.querySelector('.correct');
	var incorrect = document.querySelector('.incorrect');
	correct.style.display = "none";
	incorrect.style.display = "none";

	if (checkMap() == true) {
		clearAllCells();
		newPuzzel.click();
		correct.style.display = "flex";
	}
	else
		incorrect.style.display = "flex";
});

var help = false;
const helpPuzzel = document.getElementById('helpPuzzel');
helpPuzzel.addEventListener('click', () => {
	var game = document.querySelector('.container');
	var helper = document.querySelector('.help');

	if (help == false) {
		help = true;
		game.style.display = "none";
		helper.style.display = "flex";
	}
	else {
		console.log("help\n");
		help = false;
		game.style.display = "flex";
		helper.style.display = "none";
	}
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// first 4 = top row
// second 4 = left row
// third 4 = right row
// fourth 4 = bottom row
const mapArray = [
	[2, 2, 1, 3, 3, 1, 2, 3, 2, 2, 3, 1, 3, 2, 2, 1],
	[4, 1, 2, 2, 2, 3, 2, 1, 3, 2, 1, 2, 1, 4, 2, 2],
	[1, 2, 2, 3, 1, 2, 4, 2, 3, 2, 1, 3, 2, 1, 3, 2]
];

let currentMap = 0;

newPuzzel.click();

function clearMap() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			map[i][j] = 0;
		}
	}
}

function getCellContent(cell) {
	if (cell.textContent === "")
		return 0;
	if (cell.textContent === "1")
		return 1;
	if (cell.textContent === "2")
		return 2;
	if (cell.textContent === "3")
		return 3;
	if (cell.textContent === "4")
		return 4;
}

function getMap() {
	console.log("getMap\n");
	map[0][0] = getCellContent(document.querySelector('.cell:nth-child(8)'));
	map[0][1] = getCellContent(document.querySelector('.cell:nth-child(9)'));
	map[0][2] = getCellContent(document.querySelector('.cell:nth-child(10)'));
	map[0][3] = getCellContent(document.querySelector('.cell:nth-child(11)'));

	map[1][0] = getCellContent(document.querySelector('.cell:nth-child(14)'));
	map[1][1] = getCellContent(document.querySelector('.cell:nth-child(15)'));
	map[1][2] = getCellContent(document.querySelector('.cell:nth-child(16)'));
	map[1][3] = getCellContent(document.querySelector('.cell:nth-child(17)'));

	map[2][0] = getCellContent(document.querySelector('.cell:nth-child(20)'));
	map[2][1] = getCellContent(document.querySelector('.cell:nth-child(21)'));
	map[2][2] = getCellContent(document.querySelector('.cell:nth-child(22)'));
	map[2][3] = getCellContent(document.querySelector('.cell:nth-child(23)'));

	map[3][0] = getCellContent(document.querySelector('.cell:nth-child(26)'));
	map[3][1] = getCellContent(document.querySelector('.cell:nth-child(27)'));
	map[3][2] = getCellContent(document.querySelector('.cell:nth-child(28)'));
	map[3][3] = getCellContent(document.querySelector('.cell:nth-child(29)'));
}

function checkdoublesHelper(nb1, nb2, nb3, nb4) {
	if (nb1 == nb2 || nb1 == nb3 || nb1 == nb4 || nb2 == nb3 || nb2 == nb4 || nb3 == nb4)
		return true;
	return false;
}

function checkdoubles() {
	if (checkdoublesHelper(map[0][0], map[0][1], map[0][2], map[0][3]))
		return false;
	if (checkdoublesHelper(map[1][0], map[1][1], map[1][2], map[1][3]))
		return false;
	if (checkdoublesHelper(map[2][0], map[2][1], map[2][2], map[2][3]))
		return false;
	if (checkdoublesHelper(map[3][0], map[3][1], map[3][2], map[3][3]))
		return false;
	if (checkdoublesHelper(map[0][0], map[1][0], map[2][0], map[3][0]))
		return false;
	if (checkdoublesHelper(map[0][1], map[1][1], map[2][1], map[3][1]))
		return false;
	if (checkdoublesHelper(map[0][2], map[1][2], map[2][2], map[3][2]))
		return false;
	if (checkdoublesHelper(map[0][3], map[1][3], map[2][3], map[3][3]))
		return false;
	return true
}

function checkHeightHelper(nb1, nb2, nb3, nb4, first, second) {
	let count = 0;
	let curHeight = 0;
	if (nb1 > curHeight) {
		count++;
		curHeight = nb1;
	}
	if (nb2 > curHeight) {
		count++;
		curHeight = nb2;
	}
	if (nb3 > curHeight) {
		count++;
		curHeight = nb3;
	}
	if (nb4 > curHeight) {
		count++;
		curHeight = nb4;
	}
	if (count != first) {
		return true;
	}

	count = 0;
	curHeight = 0;
	if (nb4 > curHeight) {
		count++;
		curHeight = nb4;
	}
	if (nb3 > curHeight) {
		count++;
		curHeight = nb3;
	}
	if (nb2 > curHeight) {
		count++;
		curHeight = nb2;
	}
	if (nb1 > curHeight) {
		count++;
		curHeight = nb1;
	}
	if (count != second) {
		return true;
	}

	return false;
}

function checkHeight() {
	if (checkHeightHelper(map[0][0], map[0][1], map[0][2], map[0][3], mapArray[currentMap][4], mapArray[currentMap][8]))
		return false;
	if (checkHeightHelper(map[1][0], map[1][1], map[1][2], map[1][3], mapArray[currentMap][5], mapArray[currentMap][9]))
		return false;
	if (checkHeightHelper(map[2][0], map[2][1], map[2][2], map[2][3], mapArray[currentMap][6], mapArray[currentMap][10]))
		return false;
	if (checkHeightHelper(map[3][0], map[3][1], map[3][2], map[3][3], mapArray[currentMap][7], mapArray[currentMap][11]))
		return false;
	if (checkHeightHelper(map[0][0], map[1][0], map[2][0], map[3][0], mapArray[currentMap][0], mapArray[currentMap][12]))
		return false;
	if (checkHeightHelper(map[0][1], map[1][1], map[2][1], map[3][1], mapArray[currentMap][1], mapArray[currentMap][13]))
		return false;
	if (checkHeightHelper(map[0][2], map[1][2], map[2][2], map[3][2], mapArray[currentMap][2], mapArray[currentMap][14]))
		return false;
	if (checkHeightHelper(map[0][3], map[1][3], map[2][3], map[3][3], mapArray[currentMap][3], mapArray[currentMap][15]))
		return false;
	return true
}

function checkMap() {
	let isCorrect = true;
	clearMap();
	getMap();
	// check if all cells are filled with a number between 1 and 4
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (map[i][j] != 1 && map[i][j] != 2 && map[i][j] != 3 && map[i][j] != 4)
				isCorrect = false;
		}
	}
	// check if there are no doubles in the rows and columns
	if (isCorrect) {
		console.log("no 0 left\n");
		isCorrect = checkdoubles();
	}
	// check if the map is correct
	if (isCorrect) {
		console.log("no doubles\n");
		isCorrect = checkHeight();
	}

	if (isCorrect)
		console.log("correct\n");
	else
		console.log("incorrect\n");
	return isCorrect;
}


