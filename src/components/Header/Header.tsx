import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { HeaderItems } from "./HeaderItems";
import { DeliveryInfo } from "./DeliveryInfo";
import { CitySelector } from "../CitySelector";

export const Header: React.FC = () => {
  const [citySelectorVisible, setCitySelectorVisible] =
    useState<boolean>(false);

  const handleCityClick = (): void => {
    setCitySelectorVisible((prevState: boolean) => !prevState);
  };

  return (
    <header className="header">
      <div className={"header__left"}>
        <div className={"header__left__logo"}>
          <img
            src={logo}
            className={"header__left__logo__image"}
            alt={"logo"}
          />
        </div>
        <div className={"header__left__delivery"}>
          <DeliveryInfo onCityClick={handleCityClick} />
        </div>
      </div>
      <div className={"header__right"}>
        <HeaderItems />
      </div>
      {citySelectorVisible && <CitySelector />}
    </header>
  );
};
