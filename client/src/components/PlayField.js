import React from 'react';

import Cell from './Cell';

const PlayField = ({ playfield }) => (
	<div>
		{playfield.map(row => row.map((cell, x_axis) => <Cell key={x_axis} type={cell[0]}/>))}
	</div>
)

export default PlayField;