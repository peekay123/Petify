import React, { useState } from 'react';
import Pets from '../pet/pets';
import './gallery.css';

const Gallery = () => {
  const [data, setData] = useState(Pets);
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? data.length : 6;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="gallery" id="gallery">
      <div className="heading">
        <h3>our gallery</h3>
      </div>
      <div className="gallery-container">
        {data.slice(0, itemsToShow).map((pet) => {
          const { id, image } = pet;
          return (
            <a key={id} href={image} className="box">
              <img src={image} alt="" />
              <div className="icon"></div>
            </a>
          );
        })}
      </div>
      {data.length > 4 && (
        <button className="show-more-button" onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </section>
  );
};

export default Gallery;
