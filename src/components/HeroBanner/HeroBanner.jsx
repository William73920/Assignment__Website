import React, { useEffect, useState } from "react";
import "./HeroBanner.css";
import { IoMdSearch } from "react-icons/io";

const HeroBanner = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 300;

      setShowSearchBar(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="heroBanner__container">
      {showSearchBar && (
        <div className="fixed-search-bar">
          <div className="search__wrapper">
            <input type="text" placeholder="Address, city, state" />
            <button>
              <IoMdSearch color="#fff" size={20} />
            </button>
          </div>
        </div>
      )}
      <div className="heroBanner__title">
        <h1>The #1 site real estate</h1>
        <h1> professionals trust*</h1>
      </div>
      <div className="heroBanner__search">
        <div className="search__wrapper">
          <input type="text" placeholder="Address, city, state" />
          <button>
            <IoMdSearch color="#fff" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
