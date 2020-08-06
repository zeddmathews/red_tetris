export const PLAY_FIELD_HEIGHT = 12;
export const PLAY_FIELD_WIDTH = 20;

// export function createPlayField() {
// 	Array.from(Array(PLAY_FIELD_HEIGHT), () => {
// 		new Array(PLAY_FIELD_WIDTH).fill([0, 'clear']);
// 	});
// };

export const createPlayField = () => 
	Array.from(Array(PLAY_FIELD_HEIGHT), () => 
		new Array(PLAY_FIELD_WIDTH).fill([0, 'clear'])
	)