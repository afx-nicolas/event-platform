import { useGetLessonsQuery } from '../graphql/generated';

import { Lesson } from "./Lesson";

import { LessonSkeleton } from './LessonSkeleton';

interface SidebarProps {
	handleCloseMobileMenu: () => void;
	isMobileMenuOpen: boolean;
}

export function Sidebar({ handleCloseMobileMenu, isMobileMenuOpen }: SidebarProps) {
	const { loading, data } = useGetLessonsQuery();

	return (
		<aside
			className={
				`fixed top-[75px] ${isMobileMenuOpen ? "left-0" : "left-[100%]"} w-full h-[calc(100vh-75px)] bg-gray-700 p-4 border-l border-gray-600 z-50 lg:static lg:w-[348px] overflow-auto lg:h-auto transition-[left] duration-500`
			}
		>
			<span className="font-bold text-2xl">Cronograma das aulas</span>
			<hr className="border-gray-500 my-6" />
			<div className="flex flex-1 flex-col gap-8 items-center">
				{loading ? (
					<LessonSkeleton amount={4} />
				) : data?.lessons.map(lesson => (
					<Lesson
						title={lesson.title}
						slug={lesson.slug}
						availableAt={new Date(lesson.availableAt)}
						type={lesson.lessonType}
						key={lesson.id}
						handleCloseMobileMenu={handleCloseMobileMenu}
					/>
				))}
			</div>
		</aside>
	);
};
