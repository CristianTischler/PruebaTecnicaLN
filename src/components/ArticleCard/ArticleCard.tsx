import React from "react";
import { I_ArticleCard } from "./model";
import { formatDate } from "@/utils";
import Link from "next/link";

export const ArticleCard = ({ article }: I_ArticleCard) => {
  return (
    <div className="mod-caja-nota lugares w-100-mobile">
      <section className="cont-figure">
        <Link className="figure" href={""}>
          <picture className="content-pic picture">
            <img
              src={article.promo_items.basic.url}
              alt={"Imagen_" + article.headlines.basic}
              className="content-img"
              height={500}
              width={500}
            />
          </picture>
        </Link>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">{article.headlines.basic}</h2>
        <h4 className="com-date">
          {formatDate({ dateString: article.display_date })}
        </h4>
      </div>
    </div>
  );
};
