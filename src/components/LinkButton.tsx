import { ReactNode } from 'react';

interface LinkButtonProps {
	href: string;
	variant: 'primary' | 'secondary';
	children: ReactNode;
}

export function LinkButton({ href, variant, children }: LinkButtonProps) {
	const variants = {
		primary: "w-full xl:w-auto p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors",
		secondary: "w-full xl:w-auto p-4 text-sm text-blue-500 border border-blue-500 bg-transparent flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
	}

	return (
		<a
			href={href}
			className={variants[variant]}
		>
		{ children }
		</a>
	);
};
