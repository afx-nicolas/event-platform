import { CheckCircle } from 'phosphor-react';

interface AvailableLessonProps {
	isLessonSelected: boolean;
}

export function AvailableLesson({ isLessonSelected }: AvailableLessonProps) {
	return (
		<>
			<span className={ `${isLessonSelected ? "text-white" : "text-blue-500"} flex items-center gap-2 text-sm font-medium` }>
				<CheckCircle size={20} />
				Conteúdo liberado
			</span>
		</>
	)
}
