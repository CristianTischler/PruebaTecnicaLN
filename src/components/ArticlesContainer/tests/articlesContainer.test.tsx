import React from "react";
import { render } from "@testing-library/react";
import { ArticlesContainer } from "..";

// Mock data for testing
const articles = [
  {
    _id: "ZNJ67CCHJNAEBE6IUETWOXMNFM",
    display_date: "2019-12-06T17:50:17.735Z",
    headlines: {
      basic: "Arroz con Leche",
    },
    promo_items: {
      basic: {
        resized_urls: [
          {
            option: {
              media: "(min-width: 64em)",
            },
            resizedUrl:
              "http://demo-prod.origin.arcpublishing.com/resizer/238iFhDAmiNDgSegPUuF0J8Xqww=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
          },
        ],
        subtitle: "Gentileza: Malcriado-Entre fuegos y vinos",
        type: "image",
        url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/24QQFAJS3ZGTFL5KXDDUNP5UJU.jpg",
      },
    },
    subtype: "7",
    taxonomy: {
      tags: [
        {
          slug: "leche-tid47244",
          text: "Leche",
        },
      ],
    },
    website_url: "/recetas/postres/arroz-con-leche-nid29102019-6/",
  },
  {
    _id: "ATLC5WVL4NH5HAHU2BWJXTSATY",
    display_date: "2019-12-03T16:04:38.007Z",
    headlines: {
      basic: "NOTA RECETA DE PRUEBA (DO NOT DELETE (Ú.Ú) )",
    },
    promo_items: {
      basic: {
        resized_urls: [
          {
            option: {
              media: "(min-width: 64em)",
            },
            resizedUrl:
              "http://demo-prod.origin.arcpublishing.com/resizer/yzkzOrfuICGCehZJX1H6IPXHB3s=/600x0/arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2JPPEPJ5BBA3HIVSSAXXUQFXWE.jpg",
          },
        ],
        subtitle: "Gentileza: Malcriado-Entre fuegos y vinos",
        type: "image",
        url: "https://arc-anglerfish-arc2-sandbox-sandbox-lanacionar.s3.amazonaws.com/public/2JPPEPJ5BBA3HIVSSAXXUQFXWE.jpg",
      },
    },
    subtype: "7",
    taxonomy: {
      tags: [
        {
          slug: "obesidad",
          text: "obesidad",
        },
      ],
    },
    website_url: "/recetas/nota-receta-de-prueba-do-not-delete-uu-nid03122019/",
  },
];

test("ArticlesContainer component renders articles correctly", () => {
  const component = render(<ArticlesContainer articles={articles} />);

  articles.forEach((article) => {
    component.getByText(article.headlines.basic);
  });
});
