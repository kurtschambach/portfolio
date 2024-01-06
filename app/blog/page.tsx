import { allArticles } from "contentlayer/generated";
import { Article } from "./article";

export const revalidate = 60;

export default async function Blog() {
	const sorted = allArticles
		.filter((p) => p.published)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	if (sorted.length !== 0) {
		return (
			<div className="flex flex-row flex-wrap items-start justify-start gap-10 h-full">
				{sorted.map((article) => (
					<Article key={article.slug} article={article} />
				))}
			</div>
		);
	}
	return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="text-text text-3xl">Nothing there yet...</h2>
		</div>
	);
}
