import React from "react";
import GithubCard from "./components/github-card";
import InfoCard from "./components/info-card";
import ProjectsCard from "./components/projects-card";
import ContactCard from "./components/contact-card";

export default function Home() {
	return (
		<>
			<div className="flex flex-row flex-wrap items-start justify-center gap-6 h-80 w-full">
				<InfoCard />
				<GithubCard />
				<ProjectsCard />
				<ContactCard />
			</div>
		</>
	);
}
