import React from 'react';

import PlayField from './PlayField';
import Text from './Text';
import StartButton from './StartButton';
import { createPlayField } from '../gameHelpers';

const Tetris = () => {
	return (
		<div>
			<PlayField playfield={createPlayField()}/>
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

export default Tetris;