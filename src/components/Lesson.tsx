import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

import { LessonHeader } from './LessonHeader';

interface LessonProps {
	title: string;
	slug: string;
	availableAt: Date;
	type: 'live' | 'class';
	handleCloseMobileMenu: () => void;
}

export function Lesson(props: LessonProps) {
	const { slug } = useParams<{ slug: string }>();

	const isLessonSelected = slug === props.slug;

	const variants = {
		default: 'user relative border border-gray-500 rounded p-4 hover:border-green-500 transition-all select-none',
		selected: 'relative border border-green-500 bg-green-500 rounded p-4 hover:border-green-500 transition-colors before:content-[""] before:rounded-sm before:absolute before:translate-x-[50%] before:rotate-45 before:translate-y-[-50%] before:top-[50%] before:left-[-1rem] before:w-4 before:h-4 before:bg-green-500 before:animate-[fade-in_300ms_ease-in-out] select-none'
	}

	const isLessonAvailable = isPast(props.availableAt);
	const availableDateFormatted = format(props.availableAt, "EEEE' • 'dd' de 'MMMM' • 'HH'h'mm", { locale: ptBR })

	return (
		<div className="w-full flex flex-col gap-2">
			<span
				className="text-gray-300 first-letter:capitalize"
			>
				{ availableDateFormatted }
			</span>
			{ isLessonAvailable ? (
				<Link
					to={`/event/lesson/${props.slug}`}
					onClick={props.handleCloseMobileMenu}
					className={ isLessonSelected ? variants.selected : variants.default }
				>
					<LessonHeader isLessonSelected={isLessonSelected} isLessonAvailable={isLessonAvailable} type={props.type} />
					<strong className={ isLessonSelected ? "text-white" : "text-gray-200"}>
						{ props.title }
					</strong>
				</Link>
			) : (
				<div
					className={`${isLessonSelected ? variants.selected : variants.default} cursor-not-allowed hover:border-orange-500`}
				>
					<LessonHeader isLessonSelected={isLessonSelected} isLessonAvailable={isLessonAvailable} type={props.type} />
					<strong className={ isLessonSelected ? "text-white" : "text-gray-200"}>
						{ props.title }
					</strong>
				</div>
			) }
		</div>
	);
};
