import React from "react";
import star from "../../images/star.svg";

interface City {
  name: string;
  deliveryTime: number;
  rating: number;
}

const cities: City[] = [
  {
    name: "Санкт-Петербург",
    deliveryTime: 30,
    rating: 4.76,
  },
  {
    name: "Москва",
    deliveryTime: 34,
    rating: 4.51,
  },
];

interface DeliveryInfoProps {
  city: string;
  onCityClick: () => void;
}

export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({
  city,
  onCityClick,
}: DeliveryInfoProps) => {
  return (
    <>
      <div className={"header__left__delivery__info"}>
        <span className={"header__left__delivery__info__text"}>
          Доставка пиццы
        </span>
        <span
          className={"header__left__delivery__info__city"}
          onClick={onCityClick}
        >
          {city ? city : "Санкт-Петербург"}
        </span>
      </div>
      <div className={"header__left__delivery__time"}>
        <span>30 мин</span>
        <span className={"header__left__delivery__time__dot"}></span>
        <span>4.76</span>
        <img
          src={star}
          className={"header__left__delivery__time__star"}
          alt={"star"}
        />
      </div>
    </>
  );
};
