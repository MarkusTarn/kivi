"use client";

import { sections } from "@/sections";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";

type NavigationProps = {
	currentSection: number;
	scrollToSection: (index: number) => void;
};

const Navigation = (props: NavigationProps) => {
	const { currentSection, scrollToSection } = props;
	const t = useTranslations("Index");

	return (
		<nav className="h-full pb-40 absolute top-8 left-8 flex flex-col space-y-1 text-white z-10">
			<Link
				href="/"
				className="text-2xl font-medium tracking-tight text-shadow-pop"
				style={{ fontFamily: "var(--font-museo-moderno)" }}
			>
				{t("title")}
			</Link>
			<p className="text-sm opacity-80 text-shadow-pop">{t("subtitle")}</p>
			<div className="flex-1" />
			<div className="pt-8 space-y-2 hidden md:block">
				{sections.map((section, index) => (
					<button
						type="button"
						key={section.id}
						onClick={() => scrollToSection(index)}
						className={cn(
							"block transition-opacity hover:opacity-100",
							"text-2xl text-shadow-pop",
							currentSection === index ? "opacity-100" : "opacity-60",
							currentSection === index && "underline",
							currentSection === index && "pl-4 transition-padding",
						)}
					>
						{t(`sections.${section.id}.title`)}
					</button>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
