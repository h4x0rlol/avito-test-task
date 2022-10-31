import { Link } from 'react-router-dom';
import { getTimeDifference } from '../helpers';
import transofrmHTMLtoText from '../helpers/sanitizeHtml';
import { Item } from '../types/Item.interface';

interface NewsElementProps extends Item {
	number: number;
}

export const NewsElement = ({
	number,
	id,
	title,
	score,
	time,
	by,
}: NewsElementProps): JSX.Element => {
	const publishDate = getTimeDifference(time ?? 0);
	const newsTitle = transofrmHTMLtoText(title ?? '');

	return (
		<div className="flex items-center space-x-4 p-4 pl-0 max-sm:pl-3">
			<div className="text-orange-500 font-medium self-start place-self-start ">
				{number}
			</div>
			<div>
				<h3 className="text-gray-700">
					<Link
						className="hover:underline"
						to={`/news/${id}`}
						dangerouslySetInnerHTML={{ __html: newsTitle }}
					/>
				</h3>

				<div className="flex space-x-1.5 text-xs text-gray-500">
					<span>{score} points</span>
					<span>by {by}</span>
					<span>{publishDate}</span>
				</div>
			</div>
		</div>
	);
};
