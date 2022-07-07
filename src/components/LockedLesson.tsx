import { Lock } from 'phosphor-react';

export function LockedLesson() {
	return (
		<>
			<span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
				<Lock size={20} />
				Em breve
			</span>
		</>
	)
}
