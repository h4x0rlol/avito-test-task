import { useEffect, useState } from 'react';
import { commentsService } from '../api/CommentsService';
import { newsService } from '../api/NewsService';
import { ErrorType } from '../types/Error.type';
import { Comment } from './Comment';
import { Error } from './Error';
import { Loader } from './Loader';

type CommentListpProps = {
	newsId: number;
	commentsIds: number[];
};

export const CommentList = ({
	newsId,
	commentsIds,
}: CommentListpProps): JSX.Element => {
	const [ids, setIds] = useState<number[]>(commentsIds);
	const { data, isFetching, isLoading, isError, error } =
		commentsService.useGetCommentsQuery(ids, {
			skip: ids.length === 0,
		});

	const [trigger, newsById] = newsService.useLazyGetNewsByIdQuery();

	useEffect(() => {
		if (
			newsById?.data &&
			newsById?.data?.kids &&
			newsById?.data?.kids?.length > 0
		) {
			console.log('setting ids');
			setIds(newsById?.data?.kids);
		}
	}, [newsById?.data]);

	const queryError = error as ErrorType;

	const updateComments = (): void => {
		trigger(newsId, false);
	};

	return (
		<div className="container flex flex-wrap justify-start items-center mx-auto">
			<div className="container flex flex-row mt-3">
				<button type="button" onClick={updateComments}>
					<svg
						className="w-4 h-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
						/>
					</svg>
				</button>
				<span className="ml-1">Comments:</span>
			</div>

			{(isLoading || isFetching || newsById.isFetching) && (
				<div className="container flex w-screen justify-center text-center items-center h-1/2 self-center">
					<Loader />
				</div>
			)}

			{isError && error && (
				<Error
					retry={() => {
						return null;
					}}
				>
					{queryError?.originalStatus}
					{JSON.stringify(queryError?.data)}
				</Error>
			)}

			{!data && !isFetching && !isLoading && !newsById.isFetching && (
				<div className="container flex flex-col  w-screen">
					<span className="text-center flex align-middle justify-center">
						No comments yet...
					</span>
				</div>
			)}

			{data && (
				<ul className="divide-y container">
					{data.map((el) => {
						return (
							<li key={el.id}>
								<Comment comment={el} />
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
