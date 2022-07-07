import { Atom } from "phosphor-react";

export function EventDefault() {
	return (
		<div className="flex flex-col flex-1 gap-2 items-center pt-16">
			<Atom className="text-gray-600" size={256} />
			<span className="text-2xl font-bold">Selecione uma aula para começar!</span>
		</div>
	);
};
