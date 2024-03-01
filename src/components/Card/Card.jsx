import React from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
  return (
    <div className="card">
      <div className="card__top">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <div className="card__top__like">
          <FaRegHeart size={20} color="black" />
        </div>
      </div>
      <div className="card__bottom">
        <p className="type-info">Single family home</p>
        <h2>$389,250</h2>
        <p className="type-info">
          <span>3</span> bed, <span>2</span> bath, <span>2720</span>sqft
        </p>
        <p className="location-info"> 1385 3rd Ave, San Diego, CA 92101</p>
      </div>
    </div>
  );
};

export default Card;
