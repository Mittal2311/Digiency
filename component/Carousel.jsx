import React, { useEffect, useState } from "react";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item1" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState;
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transfrom: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          prev
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          className={`${index === activeIndex ? "active" : ""}`}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
