import React from "react";
import GithubCard from "./components/github-card";
import InfoCard from "./components/info-card";
import ProjectsCard from "./components/projects-card";
import ContactCard from "./components/contact-card";

export default function Home() {
	return (
		<>
			{/**<Particles
				className="absolute hidden sm:block inset-0 -z-10 animate-fade-in"
				quantity={350}
			/>
			<Particles
				className="absolute inset-0 block sm:hidden -z-10 animate-fade-in"
				quantity={50}
					/>*/}
			<div className="flex flex-row flex-wrap items-start justify-start gap-6 h-80">
				<InfoCard />
				<GithubCard />
				<ProjectsCard />
				<ContactCard />
			</div>
		</>
	);
}
