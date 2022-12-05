export interface IOpenGraph {
    type?: string;
    locale?: string;
    url?: string;
    site_name?: string;
    title?: string;
    description?: string;
    images?: [
      {
        url: string;
      }
    ];
  }
  
  export interface ITwitter {
    handle?: string;
    site?: string;
    cardType?: string;
  }
  
  export interface ISeo {
    title?: string;
    titleTemplate?: string;
    defaultTitle?: string;
    canonical?: string;
    description?: string;
    openGraph?: IOpenGraph;
    twitter?: ITwitter;
  }
  
  export interface IPageSeo {
    [key: string]: ISeo;
  }
  