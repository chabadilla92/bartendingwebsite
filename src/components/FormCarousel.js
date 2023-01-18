import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import Carousel from "./Carousel";
import EventDetailsForm from "./Forms/EventDetailsForm";
import VenueDetailsForm from "./Forms/VenueDetailsForm";
import PersonalDetailsForm from "./Forms/PersonalDetailsForm";

export const FormCarousel = ({ handleCreateDocument }) => {
  const [eventDetails, setEventDetails] = useState({
    date: "",
    time: "",
    occasion: "",
    guestCount: "",
    eventHours: "",
  });
  const [venueDetails, setVenueDetails] = useState({
    vibe: "",
    publicPrivate: "",
    barProvided: "",
    tipJarsAllowed: "",
    miscellaneousItems: "",
  });
  const [alcoholTypes, setAlcoholTypes] = useState({
    beerWine: false,
    liquorMixedDrink: false,
    specialCocktail: false,
    nonAlcoholic: false,
  });
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    totalBudget: "",
    zipCode: "",
    additionalDetails: "",
  });

  return (
    <Segment style={{ margin: "55px" }}>
      <Carousel
        handleCreateDocument={handleCreateDocument}
        eventDetails={eventDetails}
        venueDetails={venueDetails}
        alcoholTypes={alcoholTypes}
        personalDetails={personalDetails}
        handleEventDetails={setEventDetails}
        handleVenueDetails={setVenueDetails}
        handleAlcoholTypes={setAlcoholTypes}
        handlePersonalDetails={setPersonalDetails}
      >
        <EventDetailsForm
          eventDetails={eventDetails}
          setEventDetails={setEventDetails}
        />

        <VenueDetailsForm
          venueDetails={venueDetails}
          setVenueDetails={setVenueDetails}
          alcoholTypes={alcoholTypes}
          setAlcoholTypes={setAlcoholTypes}
        />

        <PersonalDetailsForm
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
      </Carousel>
    </Segment>
  );
};
