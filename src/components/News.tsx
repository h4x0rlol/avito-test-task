/* eslint-disable jsx-a11y/control-has-associated-label */
import { getDateFromTimestamp, getTimeDifference } from '../helpers';
import transofrmHTMLtoText from '../helpers/sanitizeHtml';
import { Item } from '../types/Item.interface';
import { CommentList } from './CommentList';

type NewsProps = {
	news: Item;
	commentsIds: number[];
};

export const News = ({ news, commentsIds }: NewsProps): JSX.Element => {
	const publishTime = `${getDateFromTimestamp(
		news?.time ?? 0
	)} (${getTimeDifference(news?.time ?? 0)})`;
	const newsTitle = transofrmHTMLtoText(news?.title ?? '');
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
								// eslint-disable-next-line react/no-danger
								dangerouslySetInnerHTML={{ __html: newsTitle }}
							/>
						</h3>
						<div className="flex space-x-1.5 text-xs text-gray-500">
							<span>{news?.score} points</span>
							<span>by {news?.by}</span>
							<span>{publishTime}</span>
							<span>| {news.descendants} comments</span>
						</div>
						<CommentList
							newsId={news?.id}
							commentsIds={commentsIds}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
