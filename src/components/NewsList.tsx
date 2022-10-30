import { getStartIndexByPage } from '../helpers';
import { Item } from '../types/Item.interface';
import { NewsElement } from './NewsElement';

type NewsListProps = {
	items: Item[];
	page: number;
};

export const NewsList = ({ items, page }: NewsListProps): JSX.Element => {
	const startIndex = getStartIndexByPage(page);

	return (
		<div className="container flex flex-wrap justify-start items-center mx-auto">
			<ul className="divide-y container">
				{items.map((el, index) => {
					return (
						<li key={el.id}>
							<NewsElement
								number={
									page === 1 ? index + 1 : startIndex + index
								}
								id={el.id}
								by={el.by}
								time={el.time}
								score={el.score}
								title={el.title}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
