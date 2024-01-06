import Link from "next/link";
import React from "react";

type Props = {
	project: {
		title: string;
		description: string;
		repository?: string;
		url?: string;
		image?: string;
	};
};

const ImageBG: React.FC<{
	children: React.ReactNode;
	image: string | undefined;
}> = ({ children, image }) => {
	switch (image) {
		case "sunrise": {
			return (
				<div className="relative isolate overflow-hidden bg-[url(/alto/sunrise.png)] bg-cover rounded-3xl">
					{children}
				</div>
			);
		}
		case "village": {
			return (
				<div className="relative isolate overflow-hidden bg-[url(/alto/village.png)] bg-cover rounded-3xl">
					{children}
				</div>
			);
		}
		case "ice": {
			return (
				<div className="relative isolate overflow-hidden bg-[url(/alto/ice.png)] bg-cover rounded-3xl">
					{children}
				</div>
			);
		}
		default: {
			return (
				<div className="relative isolate overflow-hidden bg-dark-bg rounded-3xl">
					{children}
				</div>
			);
		}
	}
};

const AltoLink: React.FC<{ image: string | undefined }> = ({ image }) => {
	switch (image) {
		case "sunrise": {
			return (
				<Link
					href="https://altosadventure.com/"
					target="_blank"
					className="z-10 text-transparent bg-[url(/alto/sunrise.png)] bg-cover bg-clip-text"
				>
					Alto's Adventure
				</Link>
			);
		}
		case "village": {
			return (
				<Link
					href="https://altosadventure.com/"
					target="_blank"
					className="z-10 text-transparent bg-[url(/alto/village.png)] bg-cover bg-clip-text"
				>
					Alto's Adventure
				</Link>
			);
		}
		case "ice": {
			return (
				<Link
					href="https://altosadventure.com/"
					target="_blank"
					className="z-10 text-transparent bg-[url(/alto/ice.png)] bg-cover bg-clip-text"
				>
					Alto's Adventure
				</Link>
			);
		}
		default: {
			return null;
		}
	}
};

const TextAmb: React.FC<{
	children: React.ReactNode;
	image: string | undefined;
}> = ({ children, image }) => {
	switch (image) {
		case "sunrise": {
			return (
				<span className="text-transparent bg-[url(/alto/sunrise.png)] bg-fit bg-clip-text">
					{children}
				</span>
			);
		}
		case "village": {
			return (
				<span className="text-transparent bg-[url(/alto/village.png)] bg-fit bg-clip-text">
					{children}
				</span>
			);
		}
		case "ice": {
			return (
				<span className="text-transparent bg-[url(/alto/ice.png)] bg-fit bg-clip-text">
					{children}
				</span>
			);
		}
		default: {
			return <span className="text-inherit">{children}</span>;
		}
	}
};

export const Header: React.FC<Props> = ({ project }) => {
	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}

	return (
		<ImageBG image={project.image}>
			<div className="absolute bottom-4 text-xs left-10 flex flex-row items-center justify-center">
				<AltoLink image={project.image} />
			</div>
			<div className="bg-dark-bg/80 w-full h-full">
				<div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
						<div className="mx-auto max-w-2xl lg:mx-0">
							<h1 className="text-4xl font-bold tracking-tight h-[5rem] sm:text-6xl text-hover">
								<TextAmb image={project.image}>{project.title}</TextAmb>
							</h1>
							<p className="mt-6 text-lg leading-8 text-text">
								<TextAmb image={project.image}>{project.description}</TextAmb>
							</p>
						</div>

						<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
							<div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
								{links.map((link) => (
									<Link
										target="_blank"
										key={link.label}
										href={link.href}
										className="text-white/80"
									>
										{link.label} <span aria-hidden="true">&rarr;</span>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</ImageBG>
	);
};
