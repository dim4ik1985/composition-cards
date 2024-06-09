import React from "react";
import classes from "./card.module.css";

interface CardProps {
  img?: string;
  title: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
  const { img, title, children } = props;
  return (
    <div className={classes["card"]}>
      <img className={classes["card__img"]} src={img} alt="" />
      <div className={classes["card__body"]}>
        <h2 className={classes["card__title"]}>{title}</h2>
        {children}
      </div>
    </div>
  );
};
