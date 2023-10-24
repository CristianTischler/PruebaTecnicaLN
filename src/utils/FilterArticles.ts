import { I_Article } from "@/model";

interface I_FilterArticles {
  articles: I_Article[];
  slug: string;
}

export const filterArticles = ({ articles, slug }: I_FilterArticles) => {
  const filterArticles = articles.filter((article: I_Article) => {
    return article.taxonomy.tags.some((tag) => tag.slug === slug);
  });
  return filterArticles;
};
