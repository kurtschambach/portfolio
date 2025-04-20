import { allArticles } from "@/.contentlayer/generated";
import { getSortedArticlesbyDate } from "@/util/utils";
import { NextResponse } from "next/server";

export async function GET() {
	const sortedArticles = getSortedArticlesbyDate(
		allArticles.filter((article) => article.published),
	);
	if (sortedArticles.length < 1) {
		console.error("Failed to get sorted articles");
		return NextResponse.json(
			{
				schemaVersion: 1,
				style: "for-the-badge",
				label: "Latest Blog Post",
				message: "No Posts",
				color: "#f38ba8",
				labelColor: "#313244",
				link: [
					"https://a3chron.vercel.app/blog",
					"https://a3chron.vercel.app/blog",
				],
				isError: true,
			},
			{ status: 404 },
		);
	}

	const latestArticle = sortedArticles[0];

	return NextResponse.json(
		{
			schemaVersion: 1,
			style: "for-the-badge",
			label: "Latest Blog Post",
			message: latestArticle.title,
			color: "#fab387",
			labelColor: "#313244",
			link: [
				`https://a3chron.vercel.app/blog/${latestArticle.slug}`,
				`https://a3chron.vercel.app/blog/${latestArticle.slug}`,
			],
		},
		{ status: 200 },
	);
}
