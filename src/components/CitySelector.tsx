import React, { RefObject } from "react";
import logoSmall from "../images/logo-small.svg";

type CitySelectorProps = {
  citySelectorRef: RefObject<HTMLDivElement>;
};

export const CitySelector: React.FC<CitySelectorProps> = ({
  citySelectorRef,
}) => {
  return (
    <div className={"citySelector"}>
      <div className={"citySelector__shadow"}></div>
      <div className={"citySelector__popup"} ref={citySelectorRef}>
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
