import { Redirect, useParams } from 'react-router-dom';

export const Main = (): JSX.Element => {
	const { page } = useParams<{ page?: string }>();
	const pageNumber = parseInt(page ?? '', 10);

	console.log(pageNumber);

	if (Number.isNaN(pageNumber) || pageNumber > 5 || pageNumber < 1) {
		return <Redirect to="/notfound" />;
	}

	return <div>Main</div>;
};
