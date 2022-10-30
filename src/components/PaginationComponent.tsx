import { Link, useHistory } from 'react-router-dom';

const totalPages = Array.from({ length: 5 }, (_, i) => i + 1);

const firstPage = totalPages[0];
const lastPage = totalPages[totalPages.length - 1];

const currentPageStyle =
	'block z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700';

const defaultPageStyle =
	'block py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700';

type PaginationComponentProps = {
	page: number;
};

export const PaginationComponent = ({
	page,
}: PaginationComponentProps): JSX.Element => {
	const history = useHistory();

	const getPrevPage = (n: number): void => {
		const to = n - 1 > firstPage - 1 ? n - 1 : n;
		if (to !== page) {
			history.push(`/${to}`);
		}
	};

	const getNextPage = (n: number): void => {
		const to = n + 1 < lastPage + 1 ? n + 1 : n;
		if (to !== page) {
			history.push(`/${to}`);
		}
	};

	return (
		<div className="container flex flex-wrap justify-center items-center mx-auto mt-4 pb-4">
			<nav>
				<ul className="inline-flex items-center -space-x-px">
					<li>
						<button
							type="button"
							onClick={() => getPrevPage(page)}
							className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</li>

					{totalPages.map((el) => {
						return (
							<li key={el}>
								<Link
									to={`/${el}`}
									className={
										el === page
											? currentPageStyle
											: defaultPageStyle
									}
								>
									{el}
								</Link>
							</li>
						);
					})}

					<li>
						<button
							type="button"
							onClick={() => getNextPage(page)}
							className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};
