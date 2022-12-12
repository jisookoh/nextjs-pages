import { IPageSeo } from "store/interface/seo";


export const seo: IPageSeo = {
  new: {
    title: "신규프로젝트 | Js Portpolio",
    titleTemplate: "%s",
    canonical: "https://jisookoh.github.io/nextjs-pages/works/new",
    description: "신규프로젝트 전체 페이지",
  },
  not_found: {
    title: "404",
  },
  error: {
    title: "Error",
  },
};

type cutZeroType = (removeDash: string) => string



const cutZero: cutZeroType = (removeDash) => {
  const sliceNumber = a.substr(0,2)
  console.log(sliceNumber)
  return '';
}

removeDash() {

}

cutZero('00325')