interface TeacherProps {
	avatarURL: string;
	name: string;
	bio: string;
}

export function Teacher({ avatarURL, name, bio}: TeacherProps) {
	return (
		<div className="flex flex-col mt-6">
			<a
				href="https://github.com/afx-nicolas"
				target="_blank"
				rel="noreferref noopener"
				className="flex self-start items-center gap-4"
			>
				<img
					src={avatarURL}
					alt={`${name} picture`}
					className="w-16 h-16 bg-zinc-900 border-2 border-blue-500 rounded-full"
				/>
				<div className="flex flex-col leading-relaxed">
					<strong className="text-2xl font-bold">{ name }</strong>
					<span className="text-gray-200">{ bio }</span>
				</div>
			</a>
		</div>
	)
}
