export type Menu = {
  title: string;
  path: string;
  newTab: boolean;
};

const menuData: Menu[] = [
  {
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    title: "Work",
    newTab: false,
    path: "/work",
  },
  {
    title: "Articles",
    newTab: false,
    path: "/articles",
  },
];

export default menuData;
