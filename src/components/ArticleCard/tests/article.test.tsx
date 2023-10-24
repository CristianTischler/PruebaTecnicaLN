import React from "react";
import { render } from "@testing-library/react";
import { ArticleCard } from "@/components";
import { I_Article } from "@/model";
import { formatDate } from "@/utils";

const articleData: I_Article = {
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
};

test("ArticleCard component renders correctly", () => {
  const component = render(<ArticleCard article={articleData} />);
  component.getByText("Arroz con Leche");
  component.getByAltText("Imagen_Arroz con Leche");
  component.getByText(formatDate({ dateString: "2019-12-06T17:50:17.735Z" }));
});
