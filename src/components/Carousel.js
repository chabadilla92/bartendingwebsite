import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { useFirestore } from 'reactfire';
import { doc, query, collection, addDoc } from 'firebase/firestore';

import '../css/carousel.css';

const Carousel = ({
  children,
  eventDetails,
  extraItems,
  venueDetails,
  alcoholTypes,
  personalDetails,
  handleExtraItems,
  handleEventDetails,
  handleVenueDetails,
  handleAlcoholTypes,
  handlePersonalDetails,
}) => {
  const db = useFirestore();
  const customerDetailsQuery = query(collection(db, 'customerDetails'));
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handleCreateNewForm = (e) => {
    const newForm = {
      eventDetails,
      venueDetails,
      alcoholTypes,
      extraItems,
      personalDetails,
    };
    console.log(newForm)
    addDoc(customerDetailsQuery, { ...newForm });
  };

  return (
    <div className='carousel'>
      <div
        className='inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child);
        })}
      </div>

      <div className='buttons'>
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
          <Link to='/confirmation'>
            <Button
              onClick={() =>
                handleCreateNewForm() &&
                handleEventDetails('') &&
                handleAlcoholTypes('') &&
                handlePersonalDetails('') &&
                handleExtraItems('') &&
                handleVenueDetails('')
              }
            >
              submit
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Carousel;
