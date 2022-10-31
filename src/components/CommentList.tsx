import { commentsService } from '../api/CommentsService';
import { ErrorType } from '../types/Error.type';
import { Comment } from './Comment';
import { Error } from './Error';
import { Loader } from './Loader';

type CommentListpProps = {
	commentsIds: number[];
};

export const CommentList = ({
	commentsIds,
}: CommentListpProps): JSX.Element => {
	const { data, isFetching, isLoading, isError, error } =
		commentsService.useGetCommentsQuery(commentsIds, {
			skip: commentsIds?.length === 0,
		});

	const queryError = error as ErrorType;

	return (
		<div className="container flex flex-wrap justify-start items-center mx-auto">
			<div className="container flex flex-row mt-3">
				<button type="button">
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

			{(isLoading || isFetching) && (
				<div className="container flex flex-col h-screen w-screen">
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
