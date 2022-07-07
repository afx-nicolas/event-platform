export function DescriptionSkeleton() {
	return (
		<div className="flex flex-1 justify-center px-4 py-8 sm:p-8 animate-pulse">
			<div className="w-full max-w-[1100px]">
				<div className="flex flex-col items-start gap-6 xl:flex-row xl:gap-16">
					<div className="flex-1 w-full">
						<div className="w-full h-8 bg-gray-500 mb-4" />
						<div className="flex flex-col w-full gap-2">
							<div className="flex gap-1">
								<div className="flex-[3] h-4 bg-gray-500 rounded" />
								<div className="flex-[2] h-4 bg-gray-500 rounded" />
								<div className="flex-[5] h-4 bg-gray-500 rounded" />
								<div className="flex-1 h-4 bg-gray-500 rounded" />
							</div>
							<div className="flex gap-1">
								<div className="flex-[5] h-4 bg-gray-500 rounded" />
								<div className="flex-[2] h-4 bg-gray-500 rounded" />
								<div className="flex-[3] h-4 bg-gray-500 rounded" />
								<div className="flex-1 h-4 bg-gray-500 rounded" />
							</div>
							<div className="flex gap-1">
								<div className="flex-1 h-4 bg-gray-500 rounded" />
								<div className="flex-[5] h-4 bg-gray-500 rounded" />
								<div className="flex-[2] h-4 bg-gray-500 rounded" />
								<div className="flex-[3] h-4 bg-gray-500 rounded" />
							</div>
						</div>
					</div>
					<div className="w-full xl:w-auto flex-col sm:flex-row justify-end flex gap-4 sm:gap-8 xl:justify-start xl:flex-col xl:gap-4">
						<div className="w-full sm:w-[237px] h-14 bg-gray-500 rounded" />
						<div className="w-full sm:w-[237px] h-14 bg-gray-500 rounded" />
					</div>
				</div>
				<div className="flex flex-col mt-6">
					<div className="w-full flex self-start items-center gap-5">
						<div className="w-16 h-16 rounded-full bg-gray-500" />
						<div className="max-w-[300px] flex flex-1 flex-col gap-2">
							<div className="w-[75%] h-6 bg-gray-500 rounded-full"/>
							<div className="w-full h-4 bg-gray-500 rounded-full"/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 mt-20 2xl:grid-cols-2">
					<div className="flex rounded bg-gray-500 h-[134px]" />
					<div className="flex rounded bg-gray-500 h-[134px]" />
				</div>
			</div>
		</div>
	);
};
