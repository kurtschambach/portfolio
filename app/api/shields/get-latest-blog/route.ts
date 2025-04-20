import { allArticles } from "@/.contentlayer/generated";
import { getSortedArticlesbyDate } from "@/util/utils";
import { NextResponse } from "next/server";

export async function GET() {
	const sortedArticles = getSortedArticlesbyDate(allArticles);
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
			},
			{ status: 404 },
		);
	}

	return NextResponse.json(
		{
			schemaVersion: 1,
			style: "for-the-badge",
			label: "Latest Blog Post",
			message: sortedArticles[0].title,
			color: "#fab387",
			labelColor: "#313244",
		},
		{ status: 200 },
	);
}
