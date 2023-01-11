import React, { useState } from "react";
import { Button } from "semantic-ui-react";

import "../css/carousel.css";

const Carousel = ({ children, handleCreateDocument, form }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child);
        })}
      </div>

      <div className="buttons">
        <Button
          primary
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          back
        </Button>

        {activeIndex !== 2 ? (
          <Button
            primary
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            next
          </Button>
        ) : (
          <Button
          onClick={() => handleCreateDocument(form)}
          >submit</Button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
