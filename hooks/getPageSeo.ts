import { seo } from "components/common/PageSeo";

export default function getPageSeo(menu: string) {
  return seo[menu];
}
