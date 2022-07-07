import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventDefault } from "../components/EventDefault";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
	const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

	useEffect(() => {
		isMobileMenuOpen
			? document.body.style.overflow = 'hidden'
			: document.body.style.overflow = 'auto'
	}, [isMobileMenuOpen])

	const { slug } = useParams<{ slug: string }>();

	const handleMobileMenuToggle = () => setIsMobileMenuOpen((currentState) => !currentState);

	const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);

	return (
		<div className="flex flex-col min-h-screen">
			<Header
				handleMobileMenuToggle={handleMobileMenuToggle}
				isMobileMenuOpen={isMobileMenuOpen}
			/>
			<main className="w-full flex flex-1">
				{
					slug
						? <Video lessonSlug={slug} />
						: <EventDefault />
				}
				<Sidebar isMobileMenuOpen={isMobileMenuOpen} handleCloseMobileMenu={handleCloseMobileMenu} />
			</main>
		</div>
	)
}
