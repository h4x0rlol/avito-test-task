import { Redirect, useParams } from 'react-router-dom';
import { newsService } from '../api/NewsService';
import { Button } from '../components/Button';
import { Loader } from '../components/Loader';
import { Navbar } from '../components/Navbar';
import { NewsList } from '../components/NewsList';
import { PaginationComponent } from '../components/PaginationComponent';
import { isPageNotInrange } from '../helpers';

const startIndex = 0;
const endIndex = 100;

export const MainPage = (): JSX.Element => {
	const { page } = useParams<{ page?: string }>();
	const pageNumber = parseInt(page ?? '', 10);

	if (isPageNotInrange(pageNumber)) {
		return <Redirect to="/notfound" />;
	}

	const { data, isFetching, isError, error, refetch } =
		newsService.useGetNewsQuery(pageNumber);

	const updateNews = (): void => {
		refetch();
	};

	return (
		<main className="flex flex-col h-screen">
			<Navbar button={<Button onClick={updateNews}>Update</Button>} />
			{isFetching ? (
				<Loader />
			) : (
				<>
					<NewsList items={data ?? []} page={pageNumber} />
					<PaginationComponent page={pageNumber} />
				</>
			)}
		</main>
	);
};
