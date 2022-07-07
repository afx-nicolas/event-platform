import { AvailableLesson } from './AvailableLesson';
import { LockedLesson } from './LockedLesson';

interface LessonHeaderProps {
	isLessonSelected: boolean;
	isLessonAvailable: Boolean;
	type: 'class' | 'live';
}

export function LessonHeader({ isLessonSelected, isLessonAvailable, type }: LessonHeaderProps) {
	return (
		<header className="flex items-center justify-between mb-4">
			{isLessonAvailable ? <AvailableLesson isLessonSelected={isLessonSelected} /> : <LockedLesson />}
			<span className={`text-xs text-white border ${isLessonSelected ? "border-white" : "border-green-300"} rounded px-2 py-[0.125rem]`}>
				{ type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
			</span>
		</header>
	)
}
