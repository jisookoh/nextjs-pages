export interface IMenu {
  title: string;
  link: string;
}


const menus: IMenu[] = [
  {
    title: "Works",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Movie",
    link: "/movie"
  }
];


export default menus;
