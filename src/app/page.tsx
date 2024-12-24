"use client";

import { sections } from "@/sections";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	const [currentSection, setCurrentSection] = useState(sections[0]);
	const [isTransitioning, setIsTransitioning] = useState(false);

	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.slice(1);
			const section = sections.find((s) => s.id === hash) || sections[0];
			setIsTransitioning(true);
			setCurrentSection(section);
			setTimeout(() => setIsTransitioning(false), 500);
		};

		handleHashChange(); // Initial load
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	return (
		<main className="min-h-screen">
			<section className="relative h-screen overflow-hidden">
				{/* Background Image with transition */}
				<div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
					<Image
						src={currentSection.background}
						alt="Background"
						fill
						className={cn(
							"object-cover transition-opacity duration-500",
							isTransitioning ? "opacity-0" : "opacity-100",
						)}
						priority
					/>
					<div className="absolute inset-0 bg-black/20" />
				</div>

				{/* Navigation */}
				<nav className="absolute top-8 left-8 space-y-4 text-white z-10">
					<Link
						href="/"
						className="text-2xl font-medium tracking-tight"
						style={{ fontFamily: "var(--font-inter)" }}
					>
						Kivi
					</Link>
					<p className="text-sm opacity-80">{currentSection.subtitle}</p>
					<div className="pt-8 space-y-2">
						{sections.map((section) => (
							<Link
								key={section.id}
								href={`#${section.id}`}
								className={cn(
									"block transition-opacity hover:opacity-100",
									currentSection.id === section.id
										? "opacity-100"
										: "opacity-60",
								)}
							>
								{section.title}
							</Link>
						))}
					</div>
				</nav>

				{/* Content */}
				<div
					className={cn(
						"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white transition-opacity duration-500",
						isTransitioning ? "opacity-0" : "opacity-100",
					)}
				>
					<h1
						className="text-7xl font-bold mb-6 tracking-tight"
						style={{ fontFamily: "var(--font-inter)" }}
					>
						{currentSection.title}
					</h1>
					<p className="max-w-2xl mx-auto text-xl leading-relaxed">
						{currentSection.description}
					</p>
				</div>

				{/* Footer */}
				<div className="absolute bottom-8 right-8 text-white text-sm">
					<p>© 2025 Kivi</p>
					<p>Tallinn, Eesti</p>
				</div>
			</section>
		</main>
	);
}
