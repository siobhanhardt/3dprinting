import React, { useState } from "react";

const Portfolio = ({ portfolioItems }) => {
  const [itemsToShow, setItemsToShow] = useState(6); // Initial number of items to show

  const loadMore = () => {
    setItemsToShow(itemsToShow + 6); // Load 6 more items
  };

  return (
    <section id="portfolio">
      <div className="portfolio-header">
        <h3>WHAT WE DO</h3>
        <h1>Our portfolio speaks louder than words!</h1>
      </div>
      <div className="portfolio-content">
        {portfolioItems.slice(0, itemsToShow).map((item, index) => (
          <div
            className={`portfolio-item${item.large ? "-large" : ""}`}
            key={index}
          >
            <div className="image-section">
              <img src={item.imageSrc} alt={item.altText} loading="lazy" />
            </div>
            <div className="text-section">
              <h1>{item.title}</h1>
              <h3>{item.material}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        {itemsToShow < portfolioItems.length && (
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
