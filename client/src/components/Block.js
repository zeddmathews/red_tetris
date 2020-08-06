import React from 'react';

function El() {
	return (
		<div>
			<p>El</p>
		</div>
	);
};

function Square() {
	return (
		<div>
			<p>Square</p>
		</div>
	);
};

function Zed() {
	return (
		<div>
			<p>Zed</p>
		</div>
	);
};

function Dez() {
	return (
		<div>
			<p>Dez</p>
		</div>
	);
};

function NewShape({ type }) {
	return (
		<div>NewShape</div>
	);
};

class Shape {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	};
}

export {
	NewShape,
	Shape
};