import React, { useRef, useState } from "react";
import logo from "../../images/logo.svg";
import { HeaderItems } from "./HeaderItems";
import { DeliveryInfo } from "./DeliveryInfo";
import { CitySelector } from "../CitySelector";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export const Header: React.FC = () => {
  const [citySelectorVisible, setCitySelectorVisible] =
    useState<boolean>(false);

  const citySelectorRef: React.MutableRefObject<null> = useRef(null);

  const handleCityClick = (): void => {
    setCitySelectorVisible((prevState: boolean) => !prevState);
  };

  useOnClickOutside(citySelectorRef, handleCityClick);

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
      {citySelectorVisible && (
        <CitySelector citySelectorRef={citySelectorRef} />
      )}
    </header>
  );
};
