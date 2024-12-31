import { Chivo, MuseoModerno } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const chivo = Chivo({
	subsets: ["latin"],
	variable: "--font-chivo",
});

const museoModerno = MuseoModerno({
	subsets: ["latin"],
	variable: "--font-museo-moderno",
});

export default async function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang="et" className={`${chivo.variable} ${museoModerno.variable}`}>
			<body className={chivo.className}>{children}</body>
		</html>
	);
}
