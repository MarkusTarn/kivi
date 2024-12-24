import { forwardRef } from "react";

type SectionProps = {
	sectionId: string;
};

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
	const { sectionId } = props;

	return (
		<section
			id={sectionId}
			ref={ref}
			className="h-screen snap-start flex flex-col justify-center items-center bg-white p-8"
		>
			<h2 className="text-3xl font-bold mb-4">Kanepivilla Isolatsioon</h2>
			<p className="max-w-2xl text-center">
				Kanepivilla isolatsioon on keskkonnasõbralik alternatiiv, mis pakub
				suurepärast soojus- ja heliisolatsiooni. See on biolagunev, taastuv ja
				toetab jätkusuutlikku ehitusviisi, tagades samas mugava sisetemperatuuri
				aastaringselt.
			</p>
		</section>
	);
});

Section.displayName = "Section";

export default Section;
