import React from "react";
import { I_TagsContainer } from "./model";
import Link from "next/link";

export const TagsContainer = ({ tags }: I_TagsContainer) => {
  //No hice otro componente tag porque no se si se va a usar en otro lado
  return (
    <div className="cont_tags com-secondary-tag hlp-marginBottom-20">
      {tags.map((tag, index) => {
        return (
          <Link className="a" href={`/tema/${tag.slug}`} key={index}>
            {tag.text}
          </Link>
        );
      })}
    </div>
  );
};
