import React from "react";
import { I_ArticlesContainer } from "./model";
import { ArticleCard } from "../ArticleCard";

export const ArticlesContainer = ({ articles }: I_ArticlesContainer) => {
  return (
    <div className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
      {articles.map((article, index) => {
        return <ArticleCard article={article} key={index} />;
      })}
    </div>
  );
};
