import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import Carousel from "./Carousel";
import EventDetailsForm from "./Forms/EventDetailsForm";
import VenueDetailsForm from "./Forms/VenueDetailsForm";
import PersonalDetailsForm from "./Forms/PersonalDetailsForm";

//TODO: figure out how to get the state objects from each form Component up to FormCarousel when the submit button is clicked. 

//TODO: create a page that prints out all of their details provided and confirm the details they'd just filled out. Just like the DMV or something.

export const FormCarousel = ({ handleCreateDocument }) => {
  const [eventDetails, setEventDetails] = useState({
    date:"",
    time:"",
    occasion:"",
    guestCount:"",
    eventHours:""
  })
  const [venueDetails, setVenueDetails] = useState({
    vibe: "",
    publicPrivate: "",
    barProvided: "",
    tipJarsAllowed: "",
    miscellaneousItems: ""
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
