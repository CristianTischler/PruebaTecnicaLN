import { I_Article, I_TagsCount } from "@/model";

export interface I_RecipesContext {
  articles: I_Article[] | null;
  tags: I_TagsCount[] | null;
  setArticlesContext: (articles: I_Article[]) => void;
  setTagsContext: (tags: I_TagsCount[]) => void;
}
