import Image from "next/image";
import Section from "../../components/section";
import Navigation from "../../components/navigation";
// import { useEffect, useRef } from "react";

export default function Home() {
	// const sectionsRef = useRef<(HTMLElement | null)[]>([]);

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(
	// 		(entries) => {
	// 			for (const entry of entries) {
	// 				if (entry.isIntersecting) {
	// 					entry.target.classList.add("in-view");
	// 				} else {
	// 					entry.target.classList.remove("in-view");
	// 				}
	// 			}
	// 		},
	// 		{ threshold: 0.5 },
	// 	);

	// 	for (const section of sectionsRef.current) {
	// 		if (section) observer.observe(section);
	// 	}

	// 	return () => observer.disconnect();
	// }, []);

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Navigation />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				Tere tulemast
			</main>
			<Section sectionId="plaster" />
			<footer className="w-full row-start-3 flex flex-wrap items-center justify-between">
				<p>© 2025 Kivi</p>
				<p>Tallinn, Eesti</p>
			</footer>
		</div>
	);
}
