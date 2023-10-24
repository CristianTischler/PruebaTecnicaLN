export interface I_Article {
  _id: string;
  display_date: string;
  headlines: I_Headlines;
  promo_items: I_PromoItems;
  subtype: string;
  taxonomy: I_Taxonomy;
  website_url: string;
}

export interface I_Headlines {
  basic: string;
}
export interface I_PromoItems {
  basic: I_Basic;
}
export interface I_Basic {
  resized_urls: any;
  subtitle: string;
  type: string;
  url: string;
}
export interface I_Taxonomy {
  tags: I_Tag[];
}
export interface I_Tag {
  slug: string;
  text: string;
}
