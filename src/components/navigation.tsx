"use client";

import { useEffect, useState } from "react";

const Navigation = () => {
	const [activeSection, setActiveSection] = useState("hero");

	const navigationItems = [
		"Lubikrohv",
		"Mikrotsement",
		"Kanepivilla Isolatsioon",
		"Kontakt",
	];

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				"hero",
				"lubikrohv",
				"mikrotsement",
				"kanepivilla",
				"contact",
			];
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (currentSection) setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 shadow-md">
			<ul className="flex flex-col space-x-4 p-4">
				<h1 className="text-4xl font-bold mb-1">Kivi</h1>
				<p className="text-xl">Rohkem kui lihtsalt puine</p>
				<div className="flex-1">t</div>
				{navigationItems.map((item) => (
					<li key={item}>
						<a
							href={`#${item.toLowerCase().replace(" ", "-")}`}
							className={`text-sm font-medium ${
								activeSection === item.toLowerCase().replace(" ", "-")
									? "text-blue-600"
									: "text-gray-600 hover:text-blue-600"
							}`}
						>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
