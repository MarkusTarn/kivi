"use client";

import { type SetStateAction, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const intersectionOptions = { threshold: 0.2, triggerOnce: false };

export type Section = {
	id: string;
	background: string;
	observer: ReturnType<typeof useInView>;
};

export default function useSections() {
	const [activeSection, setActiveSection] = useState(0);

	const sections: Section[] = [
		{
			id: "plaster",
			background: "/plaster.jpg",
			observer: useInView(intersectionOptions),
		},
		{
			id: "microcement",
			background: "/microcement.jpg",
			observer: useInView(intersectionOptions),
		},
		{
			id: "insulation",
			background: "/insulation.jpg",
			observer: useInView(intersectionOptions),
		},
		{
			id: "contact",
			background: "/contact.jpg",
			observer: useInView(intersectionOptions),
		},
	];

	const scrollToSection = (index: number) => {
		sections[index].observer.entry?.target.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		setActiveSection(index);
	};

	const handleInitialiseSections = useCallback(() => {
		const inViewIndexOrder: SetStateAction<number>[] = [];

		sections
			.map(({ observer }) => observer)
			.sort(
				(a, b) =>
					(a?.entry?.boundingClientRect?.top ?? 0) -
					(b?.entry?.boundingClientRect?.top ?? 0),
			)
			.forEach(({ inView }, index) => inView && inViewIndexOrder.push(index));

		setActiveSection(inViewIndexOrder[0]);
	}, [sections]);

	useEffect(() => handleInitialiseSections(), [handleInitialiseSections]);

	return { sections, activeSection, scrollToSection };
}
