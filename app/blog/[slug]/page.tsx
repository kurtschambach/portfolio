import { notFound } from "next/navigation";
import { allArticles } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import "@/style/mdx.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FullScreenSwitch from "@/app/components/fullscreen-switch";
import ModeSwitch from "@/app/components/light-switch";
import ThumbsUpDown from "@/app/components/thumbs-up-down";
import { Metadata } from "next";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata(
	{ params }: {
		params: Promise<{ slug: string }>
	},
): Promise<Metadata> {
	const slug = (await params).slug
   
	const article = allArticles.find((article) => article.slug === slug);

	if (article) {
		return {
			title: article.title,
		}
	}
	return {
		title: "Untitled" // should not happen
	}
}

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
		<div className="w-full h-full rounded-3xl bg-bg pr-2">
			<div className="sticky top-0 z-10 w-full h-16 flex flex-row items-center justify-start gap-4 md:gap-8 bg-dark-bg text-text text-xl font-bold border-2 border-text px-8 rounded-t-3xl">
				<Link
					href="/blog"
					className="flex flex-row gap-2 items-center justify-center text-text hover:text-hover duration-500"
				>
					<ArrowLeft />
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
			<div className="h-[calc(100vh-20rem)] w-full overflow-y-scroll scrollbar-thin scrollbar-track-bg scrollbar-thumb-text p-4 bg-dark-bg dark:bg-amber-100 rounded-b-3xl">
				<div className="group relative w-full h-full bg-inherit rounded-3xl m-0">
					<div className="lg:absolute top-2 w-full lg:w-fit pl-0 sm:pl-4 lg:pl-0 right-2 flex flex-row lg:flex-col gap-2 items-center lg:justify-center">
						<FullScreenSwitch />
						<ModeSwitch />
					</div>
					<article
						className={
							"px-0 sm:px-4 py-12 mx-auto text-text hover:text-hover dark:text-text dark:hover:text-black text-lg duration-1000 transition-[color] font-bold bg-inherit prose sm:prose-quoteless"
						}
					>
						<Mdx code={article.body.code} />
					</article>
					<div className="h-24 w-full bg-transparent flex flex-col items-center justify-center">
						<ThumbsUpDown articleSlug={article.slug} />
					</div>
				</div>
			</div>
		</div>
	);
}
