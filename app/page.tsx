'use client'

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	/*const word= 'a3chron';
	const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
	const [activeCharacter, setActiveCharacter] = useState('.');

	useEffect(() => {
		if (currentLetterIndex < word.length) {
		  const currentLetter = word[currentLetterIndex];
	
		  const iterateCharacters = (index: number) => {
			if (index <= 255) {
			  const character = String.fromCharCode(index);
			  setActiveCharacter(character);
			  if (character === currentLetter) {
				setCurrentLetterIndex(currentLetterIndex + 1);
			  } else {
				setTimeout(() => {iterateCharacters(index + 1);}, 50);
			  }
			}
		  };
		  iterateCharacters(0);
		}
	  }, [currentLetterIndex]);*/
	
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-900/30 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-xl font-bold font-plex duration-500 text-emerald-400 hover:text-zinc-200"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-black/0 via-black/50 to-black/0" />
			<Particles
				className="absolute hidden sm:block inset-0 -z-10 animate-fade-in"
				quantity={350}
			/>
			<Particles
				className="absolute inset-0 block sm:hidden -z-10 animate-fade-in"
				quantity={50}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-black cursor-default animate-title font-bold font-plex sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
				{/**<span className="animate-blur text-transparent bg-black text-4xl sm:text-6xl md:text-9xl bg-clip-text">a</span>
				<span className="animate-blur1 text-transparent bg-black text-4xl sm:text-6xl md:text-9xl bg-clip-text">3</span>
				<span className="animate-blur2 text-transparent bg-black text-4xl sm:text-6xl md:text-9xl bg-clip-text">c</span>
				<span className="animate-blur3 text-transparent bg-black text-4xl sm:text-6xl md:text-9xl bg-clip-text">h</span>
				<span className="animate-blur4 text-transparent bg-black text-4xl sm:text-6xl md:text-9xl bg-clip-text">r</span>
				<span className="animate-blur5 text-transparent bg-black text-4xl sm:text-6xl md:text-9xl bg-clip-text">o</span>
				<span className="animate-blur6 text-transparent bg-black text-4xl sm:text-6xl md:text-9xl bg-clip-text">n</span>*/}
				{/*word.slice(0, currentLetterIndex)}{currentLetterIndex < word.length && `${activeCharacter}`*/}
				a3chron
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-black/0 via-black/50 to-black/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm font-bold font-plex text-emerald-300 ">
					Hi, my name is Kurt Schambach, I am a Software Developer at {" "}
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
						className="underline duration-500 hover:text-emerald-100"
					>
						Plant Organizer
					</Link>{" "}
					at night.
				</h2>
			</div>
		</div>
	);
}
