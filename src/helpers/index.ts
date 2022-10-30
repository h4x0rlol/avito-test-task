export const getFetchIndicesArray = (arr: number[], page: number): number[] => {
	switch (page) {
		case 1:
			return arr.slice(0, 19);
		case 2:
			return arr.slice(20, 39);
		case 3:
			return arr.slice(40, 59);
		case 4:
			return arr.slice(60, 79);
		case 5:
			return arr.slice(80, 99);
		default:
			return arr.slice(0, 19);
	}
};

export const isPageNotInrange = (pageNumber: number): boolean => {
	return Number.isNaN(pageNumber) || pageNumber > 5 || pageNumber < 1;
};
