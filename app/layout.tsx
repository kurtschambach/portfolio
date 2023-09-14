import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
	title: "a3chron - Kurt Schambach",
	description: "Hi, my name is Kurt Schambach. I'm a Software engineer at Titanom Technologies, working on some of my own Projects in free time",
	openGraph: {
		title: "Kurt Schambach",
		description:
			"Hi, my name is Kurt Schambach. I'm a Software engineer at Titanom Technologies, working on some of my own Projects in free time",
		url: "https://kurtschambach.vercel.app/",
		siteName: "a3chron - Kurt Schambach - Portfolio",
		locale: "de-DE",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<meta name="google-site-verification" content="waG0eqk7cOJVSMbB42gHQIR-bDsRmy5ABoQWNFI8UKQ" />
			</head>
			<body
				className={`bg-emerald-800 ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
