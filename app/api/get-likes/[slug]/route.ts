import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET(
	request: Request,
	{ params }: { params: { slug: string } },
) {
	const articleSlug = params.slug;

	const supabase_url = process.env.SUPABASE_URL;
	const anon_key = process.env.SUPABASE_API_KEY;
	if (!(supabase_url && anon_key)) {
		console.error("failed to load env supabase variables");
		return NextResponse.json(
			{
				likes: 0,
				dislikes: 0,
			},
			{ status: 400 },
		);
	}

	const supabase = createRouteHandlerClient(
		{ cookies },
		{ supabaseUrl: supabase_url, supabaseKey: anon_key },
	);

	const { data, error } = await supabase
		.from("articles")
		.select("likes, dislikes")
		.eq("article_id", articleSlug)
		.limit(1)
		.single();

	console.log(data, error);

	if (!data || error) {
		return NextResponse.json(
			{
				likes: 0,
				dislikes: 0,
				msg: "failed to retrieve likes/dislikes from DB",
			},
			{ status: 400 },
		);
	}

	return NextResponse.json(
		{
			likes: data.likes,
			dislikes: data.dislikes,
		},
		{ status: 200 },
	);
}
