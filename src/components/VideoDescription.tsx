interface VideoDescriptionProps {
	title: string;
	description?: string | null;
}

export function VideoDescription({ title, description }: VideoDescriptionProps) {
	return (
		<div className="flex-1">
			<h1 className="text-2xl font-bold mb-4">{ title }</h1>
			{ !description ? null : <p className="text-gray-200 leading-relaxed">{ description }</p> }
		</div>
	);
};
