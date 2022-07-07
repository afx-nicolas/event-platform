import { DiscordLogo, Lightning } from "phosphor-react";
import { LinkButton } from "./LinkButton";

export function VideoLinks() {
	return (
		<div className="w-full xl:w-auto flex-col sm:flex-row flex gap-4 sm:gap-8 self-end xl:self-start xl:flex-col xl:gap-4">
			<LinkButton
				href="#"
				variant="primary"
			>
				<DiscordLogo size={24} />
				Comunidade do Discord
			</LinkButton>
			<LinkButton
				href="#"
				variant="secondary"
			>
				<Lightning size={24} />
				Acesse o desafio
			</LinkButton>
		</div>
	);
};
