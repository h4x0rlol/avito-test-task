export const getFetchIndices = (page: number): number[] => {
	switch (page) {
		case 1:
			return [0, 19];
		case 2:
			return [20, 39];
		case 3:
			return [40, 59];
		case 4:
			return [60, 79];
		case 5:
			return [80, 99];
		default:
			return [0, 19];
	}
};
