import { VideoDescription } from './VideoDescription';
import { VideoLinks } from './VideoLinks';
import { Teacher } from "./Teacher";
import { CardLinkButton } from './CardLinkButton';

interface DescriptionProps {
	title: string;
	description?: string | null;
	teacher?: {
		avatarURL: string;
		name: string;
		bio: string;
	};
}

export function Description(props: DescriptionProps) {
	return (
		<div className="flex flex-1 justify-center px-4 py-8 sm:p-8">
			<div className="w-full max-w-[1100px]">
				<div className="flex flex-col items-start gap-6 xl:flex-row xl:gap-16">
					<VideoDescription title={props.title} description={props.description} />
					<VideoLinks />
				</div>
				{ !props.teacher ? null : <Teacher name={props.teacher.name} bio={props.teacher.bio} avatarURL={props.teacher.avatarURL} /> }
				<div className="grid grid-cols-1 gap-8 mt-20 2xl:grid-cols-2">
					<CardLinkButton type="material" title="Material complementar" description="Acesse o material complementar para acelerar o seu desenvolvimento" />
					<CardLinkButton type="wallpaper" title="Wallpapers exclusivos" description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina" />
				</div>
			</div>
		</div>
	);
};
