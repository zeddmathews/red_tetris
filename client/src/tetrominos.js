export const tetrominos = {
	0 : { shape: [[0]], colour: '0, 0, 0' },
	Long : {
		shape : [
			[0, '|', 0, 0],
			[0, '|', 0, 0],
			[0, '|', 0, 0],
			[0, '|', 0, 0]
		],
		colour : '80, 227, 230'
	},
	J : {
		shape : [
			[0, '|', 0],
			[0, '|', 0],
			['_', '|', 0],
		],
		colour : '36, 95, 223'
	},
	L : {
		shape : [
			[0, '|', 0],
			[0, '|', 0],
			[0, '|', '_']
		],
		colour : '223, 173, 36'
	},
	Square : {
		shape : [
			['.', '.'],
			['.', '.']
		],
		colour : '223, 217, 36'
	},
	S : {
		shape : [
			[0, '-', '-'],
			['-', '-', 0],
			[0, 0, 0]
		],
		colour : '48, 211, 56'
	},
	Z : {
		shape : [
			['-', '-', 0],
			[0, '-', '-'],
			[0, 0, 0]
		],
		colour : '227, 78, 78'
	},
	T : {
		shape : [
			[0, 0, 0],
			['-', '-', '-'],
			[0, '|', 0]
		],
		colour : '132, 61, 198'
	},
}

export const randomTetromino = () => {
	const tetroArr = ['Long', 'J', 'L', 'Square', 'S', 'Z', 'T'];
	const randTetro = tetroArr[Math.floor(Math.random() * tetroArr.length)];
	return tetrominos[randTetro];
};