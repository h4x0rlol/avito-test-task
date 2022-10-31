import { Redirect, useParams } from 'react-router-dom';
import { newsService } from '../api/NewsService';
import { Button } from '../components/Button';
import { Loader } from '../components/Loader';
import { Navbar } from '../components/Navbar';
import { News } from '../components/News';

export const NewsPage = (): JSX.Element => {
	const { id } = useParams<{ id?: string }>();
	const newsId = parseInt(id ?? '', 10);
	// const [commentsIds, setCommentsIds] = useState<number[]>([]);

	const newsItem = newsService.useGetNewsByIdQuery(newsId);

	const updateComments = (): void => {
		// newsItem.refetch(); maybe get anotherquery or button in comments component
	};

	// useEffect(() => {
	// 	if (newsItem.data?.kids && newsItem.data?.kids?.length > 0) {
	// 		setCommentsIds(newsItem.data?.kids);
	// 	}
	// }, [newsItem.data]);

	if (Number.isNaN(newsId)) {
		return <Redirect to="/notfound" />;
	}

	return (
		<main className="flex flex-col h-screen">
			<Navbar
				button={
					<>
						<Button onClick={updateComments}>
							Refresh Comments
						</Button>
						<Button>Back to News</Button>
					</>
				}
			/>
			{(newsItem.isFetching || newsItem.isLoading) && <Loader />}
			{newsItem.data && (
				<News
					news={newsItem?.data}
					commentsIds={newsItem?.data?.kids ?? []}
				/>
			)}
		</main>
	);
};
