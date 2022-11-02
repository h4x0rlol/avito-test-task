import { commentsService } from '../api/CommentsService';
import { ErrorType } from '../types/Error.type';
import { Comment } from './Comment';
import { Error } from './Error';
import { Loader } from './Loader';

type SubCommentListpProps = {
	commentsIds: number[];
};

export const SubCommentList = ({
	commentsIds,
}: SubCommentListpProps): JSX.Element => {
	const { data, isFetching, isLoading, isError, error, refetch } =
		commentsService.useGetCommentsQuery(commentsIds, {
			skip: commentsIds.length === 0,
		});

	const refetchSubComments = (): void => {
		refetch();
	};

	const queryError = error as ErrorType;

	return (
		<div className="container flex flex-wrap justify-start items-center mx-auto">
			{(isLoading || isFetching) && (
				<div className="container flex  justify-center text-center items-center self-center">
					<Loader />
				</div>
			)}

			{isError && error && (
				<Error retry={refetchSubComments}>
					{queryError?.originalStatus}
					{JSON.stringify(queryError?.data)}
				</Error>
			)}

			{data && (
				<ul className="divide-y container">
					{data.map((el) => {
						return (
							<li key={el?.id}>
								<Comment comment={el} />
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
