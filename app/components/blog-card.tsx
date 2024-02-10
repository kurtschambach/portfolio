import { Article, allArticles } from "@/.contentlayer/generated";
import Link from "next/link";
import { Block } from "./block";

function getTwoLatestArticles(articles: Article[]): Article[] {
	const sortedArticles = articles.sort((a, b) => {
		if (a.date && b.date) {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		} else if (a.date && !b.date) {
			return -1;
		} else if (!a.date && b.date) {
			return 1;
		} else {
			return 0;
		}
	});

	return sortedArticles.slice(0, 2);
}

const BlogCard = () => {
	const latestArticles = getTwoLatestArticles(
		allArticles.filter((art) => art.published),
	);
	return (
		<Block gap>
			<Link href="/blog" className="text-lg">
				Blog - Latest Articles
			</Link>
			{latestArticles.map((article) => (
				<Link
					href={`/blog/${article.slug}`}
					key={article.slug}
					className="w-52 flex flex-row gap-2 items-center justify-center text-violet bg-violet/10 p-3 px-5 rounded-3xl border-2 border-violet mb-1"
				>
					{article.title}
				</Link>
			))}
		</Block>
	);
};

export default BlogCard;
