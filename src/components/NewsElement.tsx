import { Link } from 'react-router-dom';
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
	descendants,
}: NewsElementProps): JSX.Element => {
	return (
		<div className="flex items-center space-x-4 p-4 pl-0 max-sm:pl-3">
			<div className="text-orange-500 font-medium self-start place-self-start ">
				{number}
			</div>
			<div>
				<h3 className="text-gray-700">
					<Link className="hover:underline" to={`/news/${id}`}>
						{title}
					</Link>
				</h3>

				<div className="flex space-x-1.5 text-xs text-gray-500">
					<span>{score} points</span>
					<span>by {by}</span>
					<span>{time}</span>
					<span>| {descendants} comments</span>
				</div>
			</div>
		</div>
	);
};
