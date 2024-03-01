import React from "react";
import "./Trends.css";

const Trends = () => {
  return (
    <div className="trends__container">
      <div className="image__container">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
      <div className="image__container">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
      <div className="image__container">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
      <div className="trends__container-text">
        <p>Trends</p>
        <h3>
          Do Early Birds Buy the House? 9 Cities Where the Spring Housing Rush
          Starts Sooner Than You Think
        </h3>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Trends;
