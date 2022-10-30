export const getFetchIndicesArray = (arr: number[], page: number): number[] => {
	switch (page) {
		case 1:
			return arr.slice(0, 20);
		case 2:
			return arr.slice(20, 40);
		case 3:
			return arr.slice(40, 60);
		case 4:
			return arr.slice(60, 80);
		case 5:
			return arr.slice(80, 100);
		default:
			return arr.slice(0, 19);
	}
};

export const isPageNotInrange = (pageNumber: number): boolean => {
	return Number.isNaN(pageNumber) || pageNumber > 5 || pageNumber < 1;
};

export const getStartIndexByPage = (page: number): number => {
	switch (page) {
		case 1:
			return 1;
		case 2:
			return 21;
		case 3:
			return 41;
		case 4:
			return 61;
		case 5:
			return 81;
		default:
			return 1;
	}
};
