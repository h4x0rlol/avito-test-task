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

export const getTimeDifference = (timestamp: number): string => {
	const current = Number(String(Date.now()).slice(0, 10));
	const msPerMinute = 60;
	const msPerHour = msPerMinute * 60;
	const msPerDay = msPerHour * 24;
	const msPerMonth = msPerDay * 30;
	const msPerYear = msPerDay * 365;

	const elapsed = current - timestamp;

	if (elapsed < msPerMinute) {
		return `${Math.round(elapsed / 1000)} minutes ago`;
	}

	if (elapsed < msPerHour) {
		return `${Math.round(elapsed / msPerMinute)} minutes ago`;
	}

	if (elapsed < msPerDay) {
		return `${Math.round(elapsed / msPerHour)} hours ago`;
	}

	if (elapsed < msPerMonth) {
		return `approximately ${Math.round(elapsed / msPerDay)} days ago`;
	}

	if (elapsed < msPerYear) {
		return `approximately ${Math.round(elapsed / msPerMonth)} months ago`;
	}

	return `approximately ${Math.round(elapsed / msPerYear)} years ago`;
};
