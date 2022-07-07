interface LessonSkeletonProps {
	amount?: number;
}

export function LessonSkeleton({ amount }: LessonSkeletonProps) {
	const skeletonAmount = new Array(amount || 0).fill(0);

	return (
		<>
			{ skeletonAmount.map((_, index) => (
				<div key={index} className="flex flex-col w-full gap-2 animate-pulse">
					<div className="flex items-center w-[65%] h-6 gap-2">
						<div className="flex-[3] h-3 bg-gray-500 rounded" />
						<div className="flex-1 h-3 bg-gray-500 rounded" />
						<div className="flex-[2] h-3 bg-gray-500 rounded" />
					</div>
					<div className="flex flex-col w-full h-24 justify-between border border-gray-500 rounded p-4">
						<div className="flex justify-between gap-8">
							<div className="flex-[2] h-4 bg-gray-500 rounded" />
							<div className="flex-1 h-4 bg-gray-500 rounded" />
						</div>
						<div className="flex flex-col gap-2">
							<div className="h-6 bg-gray-500 rounded" />
						</div>
					</div>
				</div>
				))
			}
		</>
	);
};
