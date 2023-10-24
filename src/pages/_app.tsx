import { RecipesContextProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecipesContextProvider>
      <Component {...pageProps} />;
    </RecipesContextProvider>
  );
}
