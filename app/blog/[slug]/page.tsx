import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import "./mdx.css";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

export async function generateStaticParams(): Promise<Props["params"][]> {
	return allArticles
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function ArticlePage({ params }: Props) {
	const slug = params?.slug;
	const article = allArticles.find((article) => article.slug === slug);

	if (!article) {
		notFound();
	}

	return (
		<div className="bg-dark-bg text-text pr-4">
			<div className="group w-full h-full bg-dark-bg rounded-3xl mt-4">
				<article
					className={
						"px-0 sm:px-4 py-12 mx-auto text-text hover:text-hover duration-1000 text-lg font-bold bg-inherit prose sm:prose-quoteless"
					}
				>
					<Mdx code={article.body.code} />
				</article>
			</div>
		</div>
	);
}
