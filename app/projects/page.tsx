import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

//const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
	/*const views = (
		await redis.mget<number[]>(
			...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
		)
	).reduce((acc, v, i) => {
		acc[allProjects[i].slug] = v ?? 0;
		return acc;
	}, {} as Record<string, number>);*/


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
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0 font-plex">
					<h2 className="text-3xl font-bold font-plex tracking-tight text-emerald-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-emerald-400">
						Most of the projects are my own time, and some are from work.
					</p>
				</div>
				<div className="w-full h-px bg-gradient-to-l from-black/0 via-black to-black/0" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href={`/projects/${featured.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs duration-150 text-emerald-100 group-hover:text-black">
										{featured.date ? (
											<time dateTime={new Date(featured.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featured.date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>{/**TODO: mybe here wie bei vercel das icon, um die website zu sehen */}
									{/*<span className="flex items-center gap-1 text-xs text-emerald-500">
										<Eye className="w-4 h-4" />{" "}
										{Intl.NumberFormat("de-DE", { notation: "compact" }).format(
											views[featured.slug] ?? 0,
										)}
									</span>*/}
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl duration-150 font-bold text-emerald-100 group-hover:text-black sm:text-4xl font-plex"
								>
									{featured.title}
								</h2>
								<p className="mt-4 leading-8 duration-150 font-bold font-plex text-emerald-400 group-hover:text-black">
									{featured.description}
								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-emerald-200 duration-150 group-hover:text-black lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-black lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((project) => (
							<Card key={project.slug}>
								<Article project={project} views={/*views[project.slug] ??*/ 0} />
							</Card>
						))}
					</div>
				</div>
				<div className="w-full h-px bg-gradient-to-l from-black/0 via-black to-black/0" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={/*views[project.slug] ??*/ 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={/*views[project.slug] ??*/ 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={/*views[project.slug] ??*/ 0} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
