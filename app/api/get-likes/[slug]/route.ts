import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const slug = pathname.split("/").pop();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!(supabaseUrl && anonKey)) {
    console.error("failed to load env supabase variables");
    return NextResponse.json(
      { msg: "failed to load env variables" },
      { status: 400 },
    );
  }

  const supabase = createClient(supabaseUrl, anonKey);

  const { data, error } = await supabase
    .from("articles")
    .select("likes, dislikes")
    .eq("article_id", slug)
    .limit(1)
    .single();

  if (!data || error) {
    console.error(error);
    return NextResponse.json(
      {
        likes: 0,
        dislikes: 0,
        message: "failed to retrieve likes/dislikes from DB",
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
