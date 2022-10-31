import { Redirect, useHistory, useParams } from 'react-router-dom';
import { newsService } from '../api/NewsService';
import { Button } from '../components/Button';
import { Loader } from '../components/Loader';
import { Navbar } from '../components/Navbar';
import { News } from '../components/News';

export const NewsPage = (): JSX.Element => {
	const { id } = useParams<{ id?: string }>();
	const history = useHistory();
	const newsId = parseInt(id ?? '', 10);

	const newsItem = newsService.useGetNewsByIdQuery(newsId);

	const backToMainPage = (): void => {
		history.push('/');
	};

	if (Number.isNaN(newsId)) {
		return <Redirect to="/notfound" />;
	}

	return (
		<main className="flex flex-col h-screen">
			<Navbar
				button={<Button onClick={backToMainPage}>Back to News</Button>}
			/>
			{newsItem.isLoading && <Loader />}
			{newsItem.data && (
				<News
					news={newsItem?.data}
					commentsIds={newsItem?.data?.kids ?? []}
				/>
			)}
		</main>
	);
};
