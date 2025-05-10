import { Article, allArticles } from "@/.contentlayer/generated";
import Link from "next/link";
import { Block } from "../block";
import { getSortedArticlesbyDate } from "@/util/utils";
import { BookOpen, Calendar } from "lucide-react";

function getTwoLatestArticles(articles: Article[]): Article[] {
  const sortedArticles = getSortedArticlesbyDate(articles);
  return sortedArticles.slice(0, 2);
}

const BlogSection = () => {
  const latestArticles = getTwoLatestArticles(
    allArticles.filter((art) => art.published),
  );

  return (
    <Block className="bg-teal selection:text-teal">
      <div className="w-[100dvw] 2xl:w-[96rem] h-[100dvh] p-24 flex flex-col item-center justify-center">
        <h1 className="uppercase text-6xl text-teal bg-crust mb-24 w-fit p-1 px-2">
          #3 Blog
        </h1>
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              Have a look on my{" "}
              <Link href="/blog" className="underline text-crust">
                Blog
              </Link>
            </h1>
            <p className="text-2xl font-semibold mt-12 w-2/3">
              As I am trying to get more into AI, I collect some of my findings
              in a more or less readable format here. <br />
              I also write about Gnome customization, feel free to check that
              out.
            </p>
            <div className="mt-12 flex flex-col gap-6 max-w-4xl">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  description={
                    article.description ||
                    "Read more about this topic on my blog"
                  }
                  date={article.date}
                  slug={article.slug}
                />
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-col gap-4">
              <CategoryTag name="Web Development" count={6} />
              <CategoryTag name="LLMs" count={4} />
              <CategoryTag name="React" count={3} />
              <CategoryTag name="NextJS" count={5} />
              <CategoryTag name="TypeScript" count={2} />
            </div>
            <Link
              href="/blog"
              className="mt-8 inline-block bg-crust text-teal py-3 px-6 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    </Block>
  );
};

function ArticleCard({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date?: string;
  slug: string;
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-crust p-6 rounded-lg hover:shadow-lg transition-all"
    >
      <h3 className="text-xl font-bold text-teal">{title}</h3>
      <p className="text-subtext mt-2 line-clamp-2">{description}</p>
      {date && (
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
          <Calendar size={14} />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      )}
    </Link>
  );
}

function CategoryTag({ name, count }: { name: string; count: number }) {
  return (
    <div className="flex items-center justify-between bg-bg text-text rounded-lg p-px h-10">
      <span className="font-semibold p-2 text-teal">{name}</span>
      <span className="bg-teal text-crust w-fit px-3 h-full text-sm rounded-r-md flex items-center justify-center">
        {count}
      </span>
    </div>
  );
}

export default BlogSection;
