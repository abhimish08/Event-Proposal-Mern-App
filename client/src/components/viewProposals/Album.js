import React from "react";
import "../../styles/viewProposals/Album.css";

function Album({ images }) {
  return (
    <div className="view-prop-album-container">
      <div className="album-title">Gallery</div>
      <div className="view-prop-album-grid">
        {images.length !== 0
          ? images.map((img, index) => {
              return (
                <div className="album-grid-img-container" key={index}>
                  <img src={img} />
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Album;
