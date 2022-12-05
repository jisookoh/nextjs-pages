import { seo } from "components/common/pageSeo";

export default function getPageSeo(menu: string) {
  return seo[menu];
}
