import { Redirect, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { NewsList } from '../components/NewsList';
import { PaginationComponent } from '../components/PaginationComponent';
import { isPageNotInrange } from '../helpers';

export const MainPage = (): JSX.Element => {
	const { page } = useParams<{ page?: string }>();

	const pageNumber = parseInt(page ?? '', 10);

	if (isPageNotInrange(pageNumber)) {
		return <Redirect to="/notfound" />;
	}

	return (
		<main className="flex flex-col h-screen">
			<Navbar button={<Button>Update</Button>} />
			{/* <Loader /> */}
			<NewsList />
			<PaginationComponent page={pageNumber} />
		</main>
	);
};
