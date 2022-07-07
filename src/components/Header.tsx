import { List, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface HeaderProps {
	isMobileMenuOpen: boolean;
	handleMobileMenuToggle: () => void;
}

export function Header({ isMobileMenuOpen, handleMobileMenuToggle }: HeaderProps) {
	const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setScreenWidth(window.innerWidth);
		});
	}, []);

	useEffect(() => {
		console.log(screenWidth);
	}, [screenWidth]);

	return (
		<header className="fixed top-0 z-[100] w-full bg-gray-700 border-b border-gray-600 flex justify-between px-4 sm:px-8 py-5 lg:static lg:justify-center lg:px-0">
			<Logo />
			{
				screenWidth < 1024 ? (
					<button
						type="button"
						className="flex items-center gap-2"
						onClick={handleMobileMenuToggle}
					>
						{ screenWidth < 400 ? '' : 'Aulas' }
						{
							isMobileMenuOpen
								? <X size={32} className={`text-blue-500 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"} transition-transform duration-500`} />
								: <List size={32} className={`text-blue-500 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"} transition-transform duration-500`} />
						}
					</button>
				) : null
			}
		</header>
	)
}
