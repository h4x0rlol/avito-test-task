import { getDateFromTimestamp, getTimeDifference } from '../helpers';
import { Item } from '../types/Item.interface';

type NewsProps = {
	news: Item;
	commentsIds: number[];
};

export const News = ({ news, commentsIds }: NewsProps): JSX.Element => {
	const publishTime = `${getDateFromTimestamp(
		news?.time ?? 0
	)} (${getTimeDifference(news?.time ?? 0)})`;
	return (
		<div className="container flex flex-wrap justify-start items-center mx-auto">
			<div className="flex items-center space-x-4 p-4">
				{news && (
					<div>
						<h3 className="text-gray-700">
							<a
								href={news?.url}
								rel="noreferrer"
								target="_blank"
							>
								{news?.title}
							</a>
						</h3>
						<div className="flex space-x-1.5 text-xs text-gray-500">
							<span>{news?.score} points</span>
							<span>by {news?.by}</span>
							<span>{publishTime}</span>
							<span>| {news.descendants} comments</span>
						</div>
						{/* {comments &&
			comments.map((comment) => (
			  <Comment comment={comment} key={comment.id} />
			))} */}
					</div>
				)}
			</div>
		</div>
	);
};
