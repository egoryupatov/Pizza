import React from "react";

interface IButtonProps {
  text: string;
}

export const Button: React.FC<IButtonProps> = ({ text }: IButtonProps) => {
  return <button className={"button"}>{text}</button>;
};
