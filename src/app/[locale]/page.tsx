"use client";

import { sections } from "@/sections";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
	const t = useTranslations("Index");
	const [currentSection, setCurrentSection] = useState(sections[0]);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const mainRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (mainRef.current) {
				const scrollPosition = mainRef.current.scrollTop;
				const windowHeight = window.innerHeight;
				const sectionIndex = Math.round(scrollPosition / windowHeight);
				setCurrentSection(sections[sectionIndex]);
			}
		};

		const main = mainRef.current;
		if (main) {
			main.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (main) {
				main.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	const scrollToSection = (sectionId: string) => {
		const sectionIndex = sections.findIndex((s) => s.id === sectionId);
		if (sectionIndex !== -1 && mainRef.current) {
			mainRef.current.scrollTo({
				top: sectionIndex * window.innerHeight,
				behavior: "smooth",
			});
		}
	};

	return (
		<main
			ref={mainRef}
			className="h-screen overflow-y-scroll snap-y snap-mandatory"
		>
			{sections.map((section, index) => (
				<section
					key={section.id}
					id={section.id}
					className="relative h-screen snap-start"
				>
					<Image
						src={section.background}
						alt={t(`sections.${section.id}.title`)}
						fill
						className="object-cover"
						priority={index === 0}
					/>
					<div className="absolute inset-0 bg-black/20" />

					{/* Navigation */}
					<nav className="h-full pb-40 absolute top-8 left-8 flex flex-col space-y-4 text-white z-10">
						<Link
							href="/"
							className="text-2xl font-medium tracking-tight"
							style={{ fontFamily: "var(--font-museo-moderno)" }}
						>
							Kivi
						</Link>
						<p className="text-sm opacity-80">
							{t(`sections.${section.id}.subtitle`)}
						</p>
						<div className="flex-1" />
						<div className="pt-8 space-y-2">
							{sections.map((s) => (
								<button
									key={s.id}
									onClick={() => scrollToSection(s.id)}
									className={cn(
										"block transition-opacity hover:opacity-100",
										currentSection.id === s.id ? "opacity-100" : "opacity-60",
									)}
								>
									{t(`sections.${s.id}.title`)}
								</button>
							))}
						</div>
					</nav>

					{/* Content */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
						<h1
							className="text-7xl font-bold mb-6 tracking-tight"
							style={{ fontFamily: "var(--font-chivo)" }}
						>
							{t(`sections.${section.id}.title`)}
						</h1>
						<p className="max-w-2xl mx-auto text-xl leading-relaxed">
							{t(`sections.${section.id}.description`)}
						</p>
					</div>

					{/* Footer */}
					<div className="w-full py-4 px-8 absolute bottom-0 left-0 flex flex-wrap items-center justify-between text-white text-sm">
						<p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
						<p>{t("footer.location")}</p>
					</div>
				</section>
				// w-full row-start-3 flex flex-wrap items-center justify-between
			))}
		</main>
	);
}
