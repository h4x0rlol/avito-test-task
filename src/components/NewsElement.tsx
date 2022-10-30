// TODO ADD CHECK IF ITEM EXISTS item &&

import { Link } from 'react-router-dom';

export const NewsElement = (): JSX.Element => {
	return (
		<div className="flex items-center space-x-4 p-4 pl-0 max-sm:pl-3">
			<div className="text-orange-500 font-medium self-start place-self-start ">
				1
			</div>
			<div>
				<h3 className="text-gray-700">
					<Link className="hover:underline" to={`/article/${5}`}>
						Lorem ipsum dolor sit amet
					</Link>
				</h3>

				<div className="flex space-x-1.5 text-xs text-gray-500">
					<span>44 points</span>
					<span>by lorem</span>
					<span>10 minutes ago</span>
					<span>| 1212 comments</span>
				</div>
			</div>
		</div>
	);
};
