import { Redirect, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { NewsList } from '../components/NewsList';

export const Main = (): JSX.Element => {
	const { page } = useParams<{ page?: string }>();
	const pageNumber = parseInt(page ?? '', 10);

	if (Number.isNaN(pageNumber) || pageNumber > 5 || pageNumber < 1) {
		return <Redirect to="/notfound" />;
	}

	return (
		<main className="flex flex-col h-screen">
			<Navbar button={<Button>Update</Button>} />
			<NewsList />
		</main>
	);
};
