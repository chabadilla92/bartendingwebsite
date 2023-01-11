import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import Carousel from "./Carousel";
import EventDetailsForm from "./Forms/EventDetailsForm";
import VenueDetailsForm from "./Forms/VenueDetailsForm";
import PersonalDetailsForm from "./Forms/PersonalDetailsForm";


//TODO: initialize the the parent state that will manage the onFormSubmit button. This will collect all of the objects from each form, and create one new large object to send up to Firebase. 
//note: Firebase handleAddForm will be in App.js and passed down as props to here, FormCarousel. 

//TODO: create a page that prints out all of their details provided and confirm the details they'd just filled out. Just like the DMV or something.

export const FormCarousel = ({ handleCreateDocument }) => {
  const [formDocument, setFormDocument ] = useState("the whole form")

  return (
    <Segment style={{ margin: '55px'}}>
      <Carousel handleCreateDocument={handleCreateDocument} formDocument={formDocument}>
        <EventDetailsForm />
        <VenueDetailsForm />
        <PersonalDetailsForm />
      </Carousel>
    </Segment>
  );
};
