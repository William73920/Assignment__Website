import React from "react";
import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = ({ title }) => {
  return (
    <div className="card__container">
      <h1>{title}</h1>
      <div className="card__container-carousel">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardContainer;
