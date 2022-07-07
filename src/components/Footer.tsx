import { Heart } from "phosphor-react";

export function Footer() {
	return (
		<footer className="w-full px-4 sm:px-8">
			<div className="flex justify-center border-t border-gray-500 py-6">
				<span
					className="text-sm sm:text-base flex items-center gap-1"
				>
					Made with <Heart size={24} weight="fill" /> by <a className="underline" href="https://github.com/afx-nicolas" target="_blank" rel="noopener noreferrer">Nicolas A. Feitoza</a>
				</span>
			</div>
		</footer>
	);
};
