import { Article } from "@/.contentlayer/generated/types";

export function getSortedArticlesbyDate(articles: Article[]) {
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
  return sortedArticles;
}

export function cn(...inputs: (string | undefined)[]): string {
  return (
    inputs.reduce((cur, acc) => {
      if (cur === undefined) return acc;
      if (acc === "") return cur;
      return `${acc} ${cur}`;
    }, "") ?? ""
  );
}
