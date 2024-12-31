"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
	const t = useTranslations("Index");

	return (
		<footer className="w-full py-4 px-4 md:px-8 absolute bottom-0 left-0 flex flex-wrap items-center justify-between text-white text-sm">
			<p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
			<a href="tel:+37254518200">+372 5451 8200</a>
			<a href="mailto:toomas@kivi.ee">toomas@kivi.ee</a>
			<p>{t("footer.location")}</p>
		</footer>
	);
}
