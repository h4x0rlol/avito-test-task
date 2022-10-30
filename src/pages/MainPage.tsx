import { Redirect, useParams } from 'react-router-dom';
import { newsService } from '../api/NewsService';
import { Button } from '../components/Button';
import { Navbar } from '../components/Navbar';
import { NewsList } from '../components/NewsList';
import { PaginationComponent } from '../components/PaginationComponent';

export const MainPage = (): JSX.Element => {
	const { page } = useParams<{ page?: string }>();
	const { data } = newsService.useGetNewsIdsQuery(null);

	const pageNumber = parseInt(page ?? '', 10);

	if (Number.isNaN(pageNumber) || pageNumber > 5 || pageNumber < 1) {
		return <Redirect to="/notfound" />;
	}

	const fetchNews = (): void => {
		console.log(data);
	};

	return (
		<main className="flex flex-col h-screen">
			<Navbar button={<Button onClick={fetchNews}>Update</Button>} />
			<NewsList />
			<PaginationComponent page={pageNumber} />
		</main>
	);
};
