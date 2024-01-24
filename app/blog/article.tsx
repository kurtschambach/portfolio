import type { Article as ArticleType } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
	article: ArticleType;
};

const readingTime = require("reading-time");

const ColorHeader: React.FC<{ children: React.ReactNode; topic: string }> = ({
	children,
	topic,
}) => {
	switch (topic) {
		case "portfolio": {
			return (
				<div className="flex flex-row items-center justify-between h-16 w-full bg-primary/20 text-primary border-b-2 border-primary/70 rounded-t-xl px-8">
					{children}
				</div>
			);
		}
		case "devapps": {
			return (
				<div className="flex flex-row items-center justify-between h-16 w-full bg-amber-300/20 text-amber-300 border-b-2 border-amber-300/70 rounded-t-xl px-4 md:px-8">
					{children}
				</div>
			);
		}
		case "tech": {
			return (
				<div className="flex flex-row items-center justify-between h-16 w-full bg-violet/20 text-violet border-b-2 border-violet/70 rounded-t-xl px-8">
					{children}
				</div>
			);
		}
		case "tech-deep-learning-course": {
			return (
				<div className="flex flex-row items-center justify-between h-16 w-full bg-[url(/blog-header/deep-learning-course.png)] bg-cover bg-clip-padding text-violet border-b-2 border-violet/70 rounded-t-xl px-8">
					{children}
				</div>
			);
		}
		default: {
			return (
				<div className="flex flex-row items-center justify-between h-16 w-full bg-text/20 text-zinc-400 border-b-2 border-text/70 rounded-t-xl px-8">
					{children}
				</div>
			);
		}
	}
};

export const Article: React.FC<Props> = ({ article }) => {
	return (
		<Link
			href={`/blog/${article.slug}`}
			className="group w-[400px] h-72 bg-dark-bg rounded-2xl"
		>
			<article className="h-72 w-full">
				<ColorHeader topic={article.topic}>
					<span className="text-xs duration-300 text-inherit">
						{article.date ? (
							<time dateTime={new Date(article.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(article.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					<span className="text-xs duration-300 text-hover bg-dark-bg/60 group-hover:bg-dark-bg rounded-md p-1 px-3">
						{readingTime(`${article.body.code}`).text}
					</span>
				</ColorHeader>
				<div className="p-8 border-2 border-t-0 border-text h-56 rounded-b-2xl">
					<h2 className="z-20 text-xl font-medium duration-300 lg:text-3xl text-hover font-display">
						{article.title}
					</h2>
					<p className="z-20 mt-4 text-base font-bold duration-300 text-text group-hover:text-hover block">
						{article.description}
					</p>
				</div>
			</article>
		</Link>
	);
};
