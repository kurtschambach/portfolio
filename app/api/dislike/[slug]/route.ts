import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET({ params }: { params: { slug: string } }) {
  const articleSlug = params.slug;

  const supabase_url = process.env.SUPABASE_URL;
  const anon_key = process.env.SUPABASE_API_KEY;
  if (!(supabase_url && anon_key)) {
    console.error("failed to load env supabase variables");
    return NextResponse.json(
      {
        msg: "failed to load env variables",
      },
      { status: 400 },
    );
  }

  const supabase = createRouteHandlerClient(
    { cookies },
    { supabaseUrl: supabase_url, supabaseKey: anon_key },
  );

  const { data } = await supabase
    .from("articles")
    .select("dislikes")
    .eq("article_id", articleSlug)
    .limit(1)
    .single();

  if (!data) {
    return NextResponse.json(
      {
        msg: "failed to retrieve previous dislikes",
      },
      { status: 400 },
    );
  }

  const { error } = await supabase
    .from("articles")
    .update({ dislikes: data.dislikes + 1 })
    .eq("article_id", articleSlug);

  if (error) {
    return NextResponse.json(
      {
        msg: "failed to update dislikes",
      },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      msg: "updated dislikes",
    },
    { status: 201 },
  );
}
