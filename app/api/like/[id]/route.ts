import { NextResponse } from "next/server";

export async function GET(
	request: Request,
	{ params }: { params: { id: string } },
) {
	const requestUrl = new URL(request.url);
	const id = params.id;
	return NextResponse.json({
		likes: 20,
		dislikes: 1,
	});
}
