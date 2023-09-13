import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-900/30 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-xl font-bold font-display duration-500 text-zinc-300 hover:text-zinc-100"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
			<Particles
				className="absolute hidden sm:block inset-0 -z-10 animate-fade-in"
				quantity={350}
			/>
			<Particles
				className="absolute inset-0 block sm:hidden -z-10 animate-fade-in"
				quantity={50}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-black cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Kurt Schambach
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-900/0 via-zinc-900/50 to-zinc-900/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-emerald-200 ">
					Hi, my name is Kurt, I am a Software Developer at {" "}
					<Link
						target="_blank"
						href="https://www.titanom.com"
						className="underline duration-500 hover:text-emerald-100"
					>
						Titanom Technologies
					</Link>

					<br />
					and working on{" "}
					<Link
						target="_blank"
						href="https://plant-organizer.vercel.app"
						className="underline duration-500 hover:text-zinc-300"
					>
						Plant Organizer
					</Link>{" "}
					at night.
				</h2>
			</div>
		</div>
	);
}
