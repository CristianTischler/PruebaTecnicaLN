import { I_Article } from "@/model";
import { I_TagsCount } from "../model/I_TagsCount";

export const getTagsCount = async (articles: I_Article[]) => {
  const tagsCount: any = {};
  //Recorro los articulos y los tags de cada articulo
  articles.forEach((article: I_Article) => {
    article.taxonomy.tags.forEach((tag) => {
      if (tagsCount[tag.slug]) {
        tagsCount[tag.slug].count++;
      } else {
        tagsCount[tag.slug] = {
          slug: tag.slug,
          text: tag.text,
          count: 1,
        };
      }
    });
  });
  //Convierto el objeto en un array
  const tagsCountFormated = Object.values(tagsCount) as I_TagsCount[];
  //Ordeno de mayor a menor
  tagsCountFormated.sort((a: any, b: any) => {
    return b.count - a.count;
  });
  //Ordeno alfabeticamente los que tienen el mismo count
  tagsCountFormated.sort((a: any, b: any) => {
    if (a.count === b.count) {
      return a.text.localeCompare(b.text);
    }
    return 0;
  });
  //Devuelvo las primeras 10 posiciones
  return tagsCountFormated.slice(0, 10);
};
