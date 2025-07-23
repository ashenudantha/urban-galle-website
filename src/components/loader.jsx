import { React} from "react";
import "../style/Loader.css";
import image from "../images/icons8-dot-50.png" 

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={image} alt="Logo" className="logo-loader" />
    </div>
  );
};

export default Loader;
