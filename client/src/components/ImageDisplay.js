import React from "react";
import "../styles/ImageDisplay.css";

function ImageDisplay({ img }) {
  return (
    <div className="unique-album-div">
      <img className="up-image" src={img} alt="uploaded image" />
    </div>
  );
}

export default ImageDisplay;
