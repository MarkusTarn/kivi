import { Chivo, MuseoModerno } from "next/font/google";
import "@/app/globals.css";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

const chivo = Chivo({
	subsets: ["latin"],
	variable: "--font-chivo",
});

const museoModerno = MuseoModerno({
	subsets: ["latin"],
	variable: "--font-museo-moderno",
});

export function generateStaticParams() {
	return [{ locale: "et" }, { locale: "en" }];
}

export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as string)) notFound();

	const messages = await getMessages();

	return (
		<html
			lang={locale}
			className={`${chivo.variable} ${museoModerno.variable}`}
		>
			<body className={chivo.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
