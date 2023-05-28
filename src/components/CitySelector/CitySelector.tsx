import React, { ChangeEvent, RefObject, useState } from "react";
import logoSmall from "../../images/logo-small.svg";
import search from "../../images/search.svg";
import { ICityGroups } from "../../types/types";
import { cities } from "../../const/cities";

interface CitySelectorProps {
  citySelectorRef: RefObject<HTMLDivElement>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  onCityClick: () => void;
}

const cityGroups: ICityGroups = {};

cities.forEach((city: string): void => {
  const letter: string = city[0].toUpperCase();

  if (!cityGroups[letter]) {
    cityGroups[letter] = [];
  }

  cityGroups[letter].push(city);
});

export const CitySelector: React.FC<CitySelectorProps> = ({
  citySelectorRef,
  setCity,
  onCityClick,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleCityClick = (city: string): void => {
    localStorage.setItem("city", city);
    setCity(city);
    onCityClick();
  };

  const filteredLetters: string[] = Object.keys(cityGroups).filter(
    (letter: string) => {
      const cities: string[] = cityGroups[letter];

      return cities.some(
        (city: string) =>
          searchQuery === "" ||
          city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  );

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
            921 пиццерия в 17 странах
          </div>
        </div>
        <div className={"citySelector__popup__actions"}>
          <div className={"citySelector__popup__actions__search"}>
            <input
              type={"search"}
              className={"citySelector__popup__actions__search__input"}
              placeholder={"Поиск..."}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(event.target.value)
              }
              value={searchQuery}
            />
            <img src={search} alt={"search"} />
          </div>
          <div className={"citySelector__popup__actions__bigCities"}>
            <span
              className={"citySelector__popup__actions__bigCities__item"}
              onClick={() => handleCityClick("Москва")}
            >
              Москва
            </span>
            <span
              className={"citySelector__popup__actions__bigCities__item"}
              onClick={() => handleCityClick("Санкт-Петербург")}
            >
              Санкт-Петербург
            </span>
          </div>
        </div>
        <div className={"test"}>
          <div className={"citySelector__popup__cities"}>
            {filteredLetters.map((letter: string) => (
              <div className={"citySelector__popup__cities__item"}>
                <span className={"citySelector__popup__cities__letter"}>
                  {letter}
                </span>
                <div>
                  {cityGroups[letter]
                    .filter(
                      (city: string) =>
                        searchQuery === "" ||
                        city.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((city: string) => (
                      <span
                        className={"citySelector__popup__cities__list"}
                        onClick={() => handleCityClick(city)}
                      >
                        {city}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
