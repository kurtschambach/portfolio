"use client";

import { Bug, GitPullRequest, BookOpenCheck } from "lucide-react";
import Link from "next/link";

const GithubActions = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<Link
				title="GitHub Repo"
				className="text-text hover:text-hover duration-500"
				href="https://github.com/kurtschambach/portfolio/"
				target="_blank"
			>
				<GitPullRequest />
			</Link>
			<Link
				title="Report Bug"
				className="text-text hover:text-hover duration-500"
				href="https://github.com/kurtschambach/portfolio/issues/new?template=bug_report.md"
				target="_blank"
			>
				<Bug />
			</Link>
			<Link
				title="Report Spelling Mistake"
				className="text-text hover:text-hover duration-500"
				href="https://github.com/kurtschambach/portfolio/issues/new?assignees=kurtschambach&labels=spelling&projects=&template=spelling_mistake.yaml&title=Spelling%3A+"
				target="_blank"
			>
				<BookOpenCheck />
			</Link>
		</div>
	);
};

export default GithubActions;
