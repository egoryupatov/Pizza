import React, { useEffect, useRef, useState } from "react";
import logo from "../../images/logo.svg";
import { HeaderItems } from "./HeaderItems";
import { DeliveryInfo } from "./DeliveryInfo";
import { CitySelector } from "../CitySelector/CitySelector";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

export const Header: React.FC = () => {
  useEffect(() => {
    if (!localStorage.getItem("city")) {
      setCitySelectorVisible(true);
    }
  }, []);

  const [city, setCity] = useState<string>(
    localStorage.getItem("city") || "Выберите свой город"
  );
  const [citySelectorVisible, setCitySelectorVisible] =
    useState<boolean>(false);

  const citySelectorRef: React.MutableRefObject<null> = useRef(null);

  const handleCitySelectorClick = (): void => {
    setCitySelectorVisible((prevState: boolean) => !prevState);
  };

  useOnClickOutside(citySelectorRef, handleCitySelectorClick);

  console.log(!localStorage.getItem("city"));

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
          <DeliveryInfo onCityClick={handleCitySelectorClick} city={city} />
        </div>
      </div>
      <div className={"header__right"}>
        <HeaderItems />
      </div>
      {citySelectorVisible && (
        <CitySelector
          citySelectorRef={citySelectorRef}
          onCityClick={handleCitySelectorClick}
          setCity={setCity}
        />
      )}
    </header>
  );
};
