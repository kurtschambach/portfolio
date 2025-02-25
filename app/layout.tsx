import "@/style/global.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import Navigation from "@/app/components/navigation";
import GithubActions from "@/app/components/github-actions";
import ToggleFavicon from "./components/toggle-favicon";

export const metadata: Metadata = {
	title: {
		template: "%s | a3chron",
		default: "a3chron",
	},
	description:
		"Hi, my name is Kurt Schambach. I'm a Software Developer at Titanom Technologies, working on some of my own Projects in free time",
	keywords: [
		"Kurt",
		"Schambach",
		"Kurt Schambach",
		"Developer",
		"Software",
		"Titanom Technologies",
		"Technologie",
		"Portfolio",
		"PlantOrg",
		"DevApps",
		"Reinforcement Learning",
		"RL",
		"Neuronal Network",
		"Neural Network",
		"NN",
	],
	openGraph: {
		title: "Kurt Schambach",
		description:
			"Hi, my name is Kurt Schambach. I'm a Software Developer at Titanom Technologies, working on some of my own Projects in free time",
		url: "https://a3chron.vercel.app/",
		emails: "kurt.schambach@gmail.com",
		siteName: "a3chron - Kurt Schambach - Portfolio",
		images: [
			{
				url: "https://a3chron.vercel.app/a3chron.png",
				width: 1200,
				height: 600,
				alt: "a3chron logo",
			},
		],
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
		shortcut: "/a3-active.png",
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
				<ToggleFavicon />
				<div className="flex flex-col w-full 2xl:w-[96rem] h-screen bg-bg p-4 sm:px-10 md:p-10">
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
						<div className="absolute z-40 right-2 md:right-4 bottom-4 md:bottom-6 rounded-full bg-dark-bg/80 backdrop-blur-xl text-text p-4 md:py-6 hidden md:flex flex-col items-center justify-center border-2 border-text">
							<GithubActions />
						</div>
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
