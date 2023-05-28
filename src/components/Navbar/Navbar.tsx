import React from "react";
import { INavbarItem } from "../../types/types";

const items: INavbarItem[] = [
  {
    title: "Пицца",
    alias: "#pizza",
  },
  {
    title: "Комбо",
    alias: "#combo",
  },
  {
    title: "Закуски",
    alias: "#snacks",
  },
  {
    title: "Десерты",
    alias: "#desserts",
  },
  {
    title: "Напитки",
    alias: "#drinks",
  },
  {
    title: "Другие товары",
    alias: "#other",
  },
  {
    title: "Акции",
    alias: "#specials",
  },
  {
    title: "Контакты",
    alias: "#contacts",
  },
  {
    title: "О нас",
    alias: "#about",
  },
  {
    title: "Работа в Додо",
    alias: "#career",
  },
];

export const Navbar: React.FC = () => {
  return (
    <div className={"navbar"}>
      <div className={"navbar__items"}>
        {items.map((item: INavbarItem) => (
          <span>{item.title}</span>
        ))}
      </div>
      <div className={"navbar__cart"}></div>
    </div>
  );
};
