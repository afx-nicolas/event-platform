import { CaretRight, FileArrowDown, Image } from "phosphor-react";

interface CardLinkButtonProps {
	type: 'material' | 'wallpaper';
	title: string;
	description: string;
}

export function CardLinkButton({ type, title, description }: CardLinkButtonProps) {
	return (
		<a
			href="#"
			className="flex rounded overflow-hidden bg-gray-700 hover:bg-gray-600 transition-colors"
		>
			<div className="flex items-center px-4 sm:px-6 bg-green-700">
				{ type === 'material' ? <FileArrowDown size={40} /> : <Image size={40} /> }
			</div>
			<div className="flex flex-col flex-1 gap-2 p-4 sm:p-6 leading-relaxed">
				<span className="text-lg sm:text-2xl font-bold">{ title }</span>
				<span className="text-xs sm:text-sm text-gray-200">{ description }</span>
			</div>
			<div className="text-blue-500 flex items-center pr-6 sm:px-6">
				<CaretRight size={24} />
			</div>
		</a>
	);
};
