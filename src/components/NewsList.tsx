import { Item } from '../types/Item.interface';
import { NewsElement } from './NewsElement';

type NewsListProps = {
	items: Item[];
};

export const NewsList = ({ items }: NewsListProps): JSX.Element => {
	return (
		<div className="container flex flex-wrap justify-start items-center mx-auto">
			<ul className="divide-y container">
				{items.map((el, index) => {
					return (
						<li key={el.id}>
							<NewsElement
								number={index + 1}
								id={el.id}
								by={el.by}
								time={el.time}
								score={el.score}
								title={el.title}
								descendants={el.descendants}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
