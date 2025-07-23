import React from "react";
import "../style/Loader.css";
import background from "../images/loader.jpg";
import spinner from "../images/icons8-dot-50.png";

const Loader = () => {
  return (
    <div
      className="loader-wrapper"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={spinner} alt="Loading..." className="logo-loader" />
    </div>
  );
};

export default Loader;
