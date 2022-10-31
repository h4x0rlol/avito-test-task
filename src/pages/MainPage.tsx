import { Redirect, useParams } from 'react-router-dom';
import { newsService } from '../api/NewsService';
import { Button } from '../components/Button';
import { Error } from '../components/Error';
import { Loader } from '../components/Loader';
import { Navbar } from '../components/Navbar';
import { NewsList } from '../components/NewsList';
import { PaginationComponent } from '../components/PaginationComponent';
import { isPageNotInrange } from '../helpers';
import { ErrorType } from '../types/Error.type';

export const MainPage = (): JSX.Element => {
	const { page } = useParams<{ page?: string }>();
	const pageNumber = parseInt(page ?? '', 10);

	if (isPageNotInrange(pageNumber)) {
		return <Redirect to="/notfound" />;
	}

	const { data, isFetching, isLoading, isError, error, refetch } =
		newsService.useGetNewsQuery(pageNumber);

	const updateNews = (): void => {
		refetch();
	};

	if (isError && error) {
		const queryError = error as ErrorType;
		return (
			<Error retry={updateNews}>
				{queryError?.originalStatus} {JSON.stringify(queryError?.data)}
			</Error>
		);
	}

	return (
		<main className="flex flex-col h-screen">
			<Navbar button={<Button onClick={updateNews}>Update</Button>} />
			{isFetching || isLoading ? (
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
