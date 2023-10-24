import {
  ArticlesContainer,
  CustomLayout,
  CustomSideBar,
  TagsContainer,
  Title,
} from "@/components";
import { useRecipeContext } from "@/context";
import { I_Article, I_TagsCount } from "@/model";
import { get } from "@/services";
import { filterArticles, getTagsCount } from "@/utils";
import React, { useEffect, useState } from "react";

interface I_TemaPageProps {
  filtrados: I_Article[];
}
export default function TemaPage({ filtrados }: I_TemaPageProps) {
  const { tags } = useRecipeContext();
  const [tagsPage, setTags] = useState<I_TagsCount[]>(tags ?? []);

  const fetchTags = async () => {
    const res = await get({ url: "/" });
    const articles = res.articles;

    //Tomo como validos los articulos con subtype 7
    const filteredArticles = articles.filter((article: I_Article) => {
      return article.subtype == "7";
    });
    const tags = await getTagsCount(filteredArticles);
    setTags(tags);
  };

  useEffect(() => {
    if (tags == null) {
      fetchTags();
    }
  });

  return (
    <CustomLayout>
      <CustomSideBar type="main">
        <Title title="Acumulado Grilla" />
        <TagsContainer tags={tagsPage} />
        <ArticlesContainer articles={filtrados} />
      </CustomSideBar>
      <CustomSideBar type="aside"></CustomSideBar>
    </CustomLayout>
  );
}

export async function getServerSideProps(context: any) {
  const res = await get({ url: "/" });
  const articles = res.articles;

  //Tomo como validos los articulos con subtype 7
  const filteredArticles = articles.filter((article: I_Article) => {
    return article.subtype == "7";
  });
  const filtrados = await filterArticles({
    articles: filteredArticles,
    slug: context.query.slug,
  });

  return { props: { filtrados } };
}
