import React from "react";
import coins from "../../images/coins.svg";
import deals from "../../images/deals.svg";
import dashboard from "../../images/dashboard.svg";
import { IHeaderItem } from "../../types/HeaderItem";

const items: IHeaderItem[] = [
  {
    image: coins,
    name: "Додокоины",
    alias: "coins",
  },
  {
    image: deals,
    name: "Мои акции",
    alias: "deals",
  },
  {
    image: dashboard,
    name: "Кабинет",
    alias: "dashboard",
  },
];

export const HeaderItems: React.FC = () => {
  return (
    <>
      {items.map((item: IHeaderItem) => (
        <div className={"header__right__item"} key={item.alias}>
          <img
            src={item.image}
            alt={item.alias}
            className={"header__right__item__image"}
          />
          <span className={"header__right__item__text"}>{item.name}</span>
        </div>
      ))}
    </>
  );
};
