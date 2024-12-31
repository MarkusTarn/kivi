"use client";

import { useTranslations } from "next-intl";

type SectionProps = {
	sectionId: string;
};

const Section = (props: SectionProps) => {
	const { sectionId } = props;
	const t = useTranslations("Index");

	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white md:top-1/4 md:right-1/4 md:left-auto md:-translate-x-0 md:-translate-y-0">
			<h1
				className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-shadow-pop text-right"
				style={{ fontFamily: "var(--font-chivo)" }}
			>
				{t(`sections.${sectionId}.title`)}
			</h1>
			<div
				className="text-lg md:text-xl max-w-2xl mx-auto text-xl leading-relaxed text-shadow-pop text-left"
				dangerouslySetInnerHTML={{
					__html: t.raw(`sections.${sectionId}.description`),
				}}
			/>
		</div>
	);
};

export default Section;
