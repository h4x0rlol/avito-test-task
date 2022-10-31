import { ReactNode } from 'react';

type ErrorProps = {
	children: ReactNode;
	retry: () => void;
};

export const Error = ({ children, retry }: ErrorProps): JSX.Element => {
	return (
		<div className="text-center flex align-middle justify-center items-center h-screen">
			<div
				id="alert-additional-content-2"
				className="p-4 mb-4 border border-red-300 rounded-lg bg-red-50 dark:bg-red-200"
				role="alert"
			>
				<div className="flex items-center">
					<h3 className="text-lg font-medium text-red-900 dark:text-red-800">
						Something went wrong...
					</h3>
				</div>
				<div className="mt-2 mb-4 text-sm text-red-900 dark:text-red-800">
					{children}
				</div>
				<div>
					<button
						type="button"
						onClick={retry}
						className="text-white bg-red-900 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
					>
						Try again
					</button>
				</div>
			</div>
		</div>
	);
};
