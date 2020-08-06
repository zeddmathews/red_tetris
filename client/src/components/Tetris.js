import React from 'react';

import PlayField from './PlayField';
import Text from './Text';
import StartButton from './StartButton';

export default function Tetris() {
	return (
		<div>
			<PlayField />
			<aside>
				<div>
					<Text text="Score"/>
					<Text text="Rows"/>
					<Text text="Levels"/>
				</div>
				<StartButton />
			</aside>
		</div>
	);
}