import React from "react";
import "./Cal.css";

const Cal = () => {
  return (
    <>
      <div className="cal__container">
        <div className="cal__container-image">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div className="cal__container-text">
          <h1>Need a home loan? Get pre-approved</h1>
          <p>
            Find a lender who can offer competitive mortgage rates and help you
            with pre-approval for your dream home.{" "}
          </p>
          <button>Get pre approved now</button>
        </div>
      </div>

      <div className="cal__container reverse">
        <div className="cal__container-image">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div className="cal__container-text">
          <h1>Get Local Info</h1>
          <p>
            Does it have pet-friendly rentals? How are the schools? Get
            important local information on the area you're most interested in.{" "}
          </p>
          <button>Get pre approved now</button>
        </div>
      </div>
    </>
  );
};

export default Cal;
