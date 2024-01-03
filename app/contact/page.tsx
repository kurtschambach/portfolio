"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/kurt-schambach/",
		label: "LinkedIn",
		handle: "Kurt Schambach",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:kurt.schambach@gmail.com",
		label: "Email",
		handle: "kurt.schambach@\ngmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/kurtschambach",
		label: "Github",
		handle: "a3chron",
	},
];

export default function Example() {
	return (
		<div className="bg-bg h-full pb-10 sm:pb-0 lg:pb-20">
			<div className="container flex items-center justify-center h-full w-full pr-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-24 lg:pb-32 p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-violet via-transparent to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-violet border-violet bg-zinc-900">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl duration-1000 lg:text-3xl font-plex">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
