import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/components/mdx";
import { Header } from "./header";
import "@/style/mdx.css";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const project = allProjects.find((project) => project.slug === slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="bg-bg text-text pr-4">
			<Header project={project} />

			<div className="group w-full h-full bg-bg hover:bg-dark-bg duration-1000 rounded-3xl mt-4">
				<article
					className={
						"px-4 py-12 mx-auto text-text hover:text-hover duration-1000 text-lg font-bold bg-transparent prose prose-quoteless"
					}
				>
					<Mdx code={project.body.code} />
				</article>
			</div>
		</div>
	);
}
