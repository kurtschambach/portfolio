import React from "react";
import GithubCard from "@/app/components/github-card";
import InfoCard from "@/app/components/info-card";
import ProjectsCard from "@/app/components/projects-card";
import ContactCard from "@/app/components/contact-card";
import BlogCard from "./components/blog-card";
import DLCourseCard from "./components/deep-learning-course-card";

export default function Home() {
	return (
		<div className="flex flex-row flex-wrap items-center justify-center gap-6 h-fit w-full">
			<InfoCard />
			<GithubCard />
			<ProjectsCard />
			<ContactCard />
			<BlogCard />
			<DLCourseCard />
		</div>
	);
}
