import React from "react";
import logoSmall from "../images/logo-small.svg";

export const CitySelector: React.FC = () => {
  return (
    <div className={"citySelector"}>
      <div className={"citySelector__shadow"}></div>
      <div className={"citySelector__popup"}>
        <div className={"citySelector__popup__header"}>
          <div className={"citySelector__popup__header__logo"}>
            <img
              src={logoSmall}
              alt="Logo"
              className={"citySelector__popup__header__logo"}
            />
          </div>
          <div className={"citySelector__popup__header__title"}>
            919 пиццерий в 17 странах
          </div>
        </div>
        <div className={"citySelector__popup__actions"}></div>
        <div className={"citySelector__popup__content"}></div>
      </div>
    </div>
  );
};
