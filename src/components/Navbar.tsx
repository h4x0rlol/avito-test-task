import { ReactNode } from 'react';

type NavbarProps = {
	button: ReactNode;
};

export const Navbar = ({ button }: NavbarProps): JSX.Element => {
	return (
		<nav className="bg-white px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200">
			<div className="container flex flex-wrap justify-between items-center mx-auto">
				<div className="flex items-center">
					<span className="self-center text-xl font-semibold whitespace-nowrap">
						Hacker News UI
					</span>
				</div>
				<div className="flex md:order-2">{button}</div>
			</div>
		</nav>
	);
};
