import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import "@/style/mdx.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
		<>
			<div className="sticky top-0 z-10 w-full h-16 flex flex-row items-center justify-start gap-4 md:gap-8 bg-dark-bg text-text text-xl font-bold border-2 border-text px-8 rounded-t-3xl">
				<Link
					href="/blog"
					className="flex flex-row gap-2 items-center justify-center text-text hover:text-hover duration-500"
				>
					<ArrowLeft className="hidden md:block" />
					Blog
				</Link>
				<span
					className={`hidden sm:block cursor-default ${
						(article.topic.includes("tech") && "text-violet") ||
						(article.topic.includes("portfolio") && "text-primary") ||
						(article.topic.includes("dev-apps")
							? "text-amber-300"
							: "text-text")
					}`}
				>
					{article.title}
				</span>
			</div>
			<div className="p-4 sm:p-10">
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
			</div>
		</>
	);
}
