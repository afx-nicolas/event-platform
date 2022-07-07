import { DefaultUi, Player, Youtube } from "@vime/react";
import { Description } from "./Description";

import '@vime/core/themes/default.css';
import { Footer } from "./Footer";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { DescriptionSkeleton } from "./DescriptionSkeleton";

interface VideoProps {
	lessonSlug: string;
}

export function Video(props: VideoProps) {
	const { loading, data } = useGetLessonBySlugQuery({
		variables: {
			slug: props.lessonSlug
		}
	});

	return (
		<section className="flex mt-[75px] flex-col flex-1 lg:mt-0">
			<div className="bg-black flex justify-center">
				<div className="h-full w-full max-w-[1100px] max-h-[100vh] aspect-video bg-zinc-900">
					{ loading ? (
						<div className="bg-gray-500 animate-pulse w-full h-full" />
					) : (
						<Player>
							{
								!data?.lesson ? null : (
									<>
										<Youtube key={data?.lesson.videoId} videoId={data?.lesson.videoId!} />
										<DefaultUi />
									</>
								)
							}
						</Player>
					) }
				</div>
			</div>
			{
				loading
					? <DescriptionSkeleton />
					: !data?.lesson || !data?.lesson?.teacher ? null : (
					<Description
						title={data?.lesson.title}
						description={data?.lesson.description}
						teacher={{ name: data?.lesson.teacher.name, bio: data?.lesson.teacher.bio, avatarURL: data?.lesson.teacher.avatarURL }}
					/>
				)
			}
			<Footer />
		</section>
	);
}
