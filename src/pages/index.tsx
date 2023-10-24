import React from "react";
import {
  ArticlesContainer,
  CustomLayout,
  CustomSideBar,
  TagsContainer,
  Title,
} from "@/components";
import { I_Article, I_TagsCount } from "@/model";
import { getTagsCount } from "@/utils";
import { useRecipeContext } from "@/context";
import { get } from "@/services";

interface I_HomeProps {
  filteredArticles: I_Article[];
  tags: I_TagsCount[];
}

export default function Home({ filteredArticles, tags }: I_HomeProps) {
  const { setArticlesContext, setTagsContext } = useRecipeContext();
  setArticlesContext(filteredArticles);
  setTagsContext(tags);
  return (
    <CustomLayout>
      <CustomSideBar type="main">
        <Title title="Acumulado Grilla" />
        <TagsContainer tags={tags} />
        <ArticlesContainer articles={filteredArticles} />
      </CustomSideBar>
      <CustomSideBar type="aside"></CustomSideBar>
    </CustomLayout>
  );
}

export async function getServerSideProps() {
  const res = await get({ url: "/" });
  const articles = res.articles;

  //Tomo como validos los articulos con subtype 7
  const filteredArticles = articles.filter((article: I_Article) => {
    return article.subtype == "7";
  });
  const tags = await getTagsCount(filteredArticles);
  return { props: { filteredArticles, tags } };
}
