import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default async function ProjectsPage() {
	const featured = allProjects.find((project) => project.slug === "plant-org")!;
	const top2 = allProjects.find((project) => project.slug === "py-shop")!;
	const top3 = allProjects.find((project) => project.slug === "portfolio")!;
	const sorted = allProjects
		.filter((p) => p.published)
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== top2.slug &&
				project.slug !== top3.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	return (
		<div className="relative">
			<div className="space-y-8 md:space-y-16 pr-4">
				<div className="max-w-3xl mx-auto lg:mx-0 font-plex px-2 md:px-8 text-hover text-sm">
					<p className="mt-4">
						In the detailed project articles, when scrolling down, the
						background should become darker, but for even more contrast, you can
						hover the text.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
					<Card>
						<Link href={`/projects/${featured.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs duration-300 text-text">
										{featured.date ? (
											<time dateTime={new Date(featured.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featured.date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
									{/**TODO: mybe here wie bei vercel das icon, um die website zu sehen */}
									{/*<span className="flex items-center gap-1 text-xs text-emerald-500">
										<Eye className="w-4 h-4" />{" "}
										{Intl.NumberFormat("de-DE", { notation: "compact" }).format(
											views[featured.slug] ?? 0,
										)}
									</span>*/}
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl duration-300 font-bold text-hover sm:text-4xl font-plex"
								>
									{featured.title}
								</h2>
								<p className="mt-4 leading-8 duration-300 font-bold font-plex text-text group-hover:text-hover">
									{featured.description}
								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-violet duration-300 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto lg:mx-0">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} />
							</Card>
						))}
					</div>
				</div>
				<div className="w-full h-px bg-gradient-to-l from-bg/0 via-violet to-bg/0" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
