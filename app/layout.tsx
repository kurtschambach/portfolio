import "../global.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Navigation from "./components/navigation";

export const metadata: Metadata = {
	title: "a3chron - Kurt Schambach",
	description:
		"Hi, my name is Kurt Schambach. I'm a Software engineer at Titanom Technologies, working on some of my own Projects in free time",
	openGraph: {
		title: "Kurt Schambach",
		description:
			"Hi, my name is Kurt Schambach. I'm a Software engineer at Titanom Technologies, working on some of my own Projects in free time",
		url: "https://a3chron.vercel.app/",
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
	metadataBase: new URL("https://a3chron.vercel.app/"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="font-plex">
			<body
				className={`bg-bg flex flex-col items-center ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<Analytics />
				<div className="flex flex-col w-screen h-screen overflow-hidden bg-bg p-4 sm:px-10 md:p-10 w-full 2xl:w-[96rem]">
					<div className="flex flex-row items-center justify-between mb-12 px-2">
						<Link
							href="/"
							className="mt-6 md:mt-0 w-fit flex flex-col items-center justify-center text-primary font-bold font-plex text-3xl whitespace-nowrap"
						>
							<span className="text-lg text-text">Kurt Schambach</span>
							<span className="pl-6">a3chron</span>
						</Link>
						<Navigation />
					</div>
					<div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-track-bg scrollbar-thumb-text">
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
