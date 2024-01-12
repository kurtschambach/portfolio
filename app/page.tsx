import React from "react";
import GithubCard from "@/app/components/github-card";
import InfoCard from "@/app/components/info-card";
import ProjectsCard from "@/app/components/projects-card";
import ContactCard from "@/app/components/contact-card";

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
