import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-300 text-text">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
				</div>
				{project.appLogo ? (
					<div className="flex flex-row items-center justify-between gap-0">
						<div className="flex flex-row items-center justify-start w-full gap-4">
							<h2 className="z-20 text-xl font-medium duration-300 lg:text-3xl no-wrap min-w-max text-hover font-display">
								{project.title}
							</h2>
							<div className="h-[2px] w-0 bg-gradient-to-r from-text/40 to-transparent group-hover:w-full group-hover:to-text duration-700" />
						</div>
						<div className="rounded-full h-fit w-fit ring-2 ring-dark-bg group-hover:ring-text shadow-md shadow-black group-hover:shadow-text duration-150 delay-300 ring-offset-2 ring-offset-real-black">
							<Image
								width={36}
								height={36}
								alt={`${project.title} logo`}
								src={project.appLogo}
								className="rounded-full object-scale-down"
							/>
						</div>
					</div>
				) : (
					<h2 className="z-20 text-xl font-medium duration-300 lg:text-3xl text-hover font-display">
						{project.title}
					</h2>
				)}
				<p className="z-20 mt-4 text-sm duration-300 text-text group-hover:text-hover">
					{project.description}
				</p>
			</article>
		</Link>
	);
};
