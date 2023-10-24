import React, { createContext, useContext, useState } from "react";
import { I_RecipesContext } from "./model";

const recipesContext = createContext({} as I_RecipesContext);

export function RecipesContextProvider({ children }: any) {
  const [articles, setArticles] = useState<
    I_RecipesContext["articles"] | undefined
  >();
  const [tags, setTags] = useState<I_RecipesContext["tags"] | undefined>();

  const setArticlesContext = (articles: I_RecipesContext["articles"]) => {
    setArticles(articles);
  };
  const setTagsContext = (tags: I_RecipesContext["tags"]) => {
    setTags(tags);
  };

  return (
    <recipesContext.Provider
      value={{
        articles: articles ?? null,
        tags: tags ?? null,
        setArticlesContext,
        setTagsContext,
      }}
    >
      {children}
    </recipesContext.Provider>
  );
}

export function useRecipeContext() {
  const context = useContext(recipesContext);
  if (context === undefined) {
    throw new Error("El contexto debe usarse dentro de un proveedor");
  }
  return context;
}

export const RecipesContext = createContext<I_RecipesContext | null>(null);
