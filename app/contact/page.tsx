import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "@/app/components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
};

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
		<div className="bg-bg h-full pt-96 md:pt-0 pb-10 sm:pb-10 md:pb-0 lg:pb-20">
			<div className="container flex items-center justify-center h-full w-full pr-4 mx-auto">
				<div className="grid w-full grid-cols-1 mx-auto mt-32 md:mt-0 md:grid-cols-3 gap-8 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.handle}>
							<Link
								href={s.href}
								target="_blank"
								className="group relative flex flex-col items-center duration-700 group gap-6 md:gap-24 lg:pb-32 p-16"
							>
								<span
									className="absolute w-[2px] h-10 group-hover:h-2/3 duration-500 bg-gradient-to-b from-violet via-transparent to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border-2 rounded-full text-violet border-violet bg-zinc-900">
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
