import React from "react";
import { Segment } from "semantic-ui-react";
import Carousel from "./Carousel";
import EventDetailsForm from "./EventDetailsForm";
import PersonInfoForm from "./PersonInfoForm";
import VenueDetailsForm from "./VenueDetailsForm";


//TODO: initialize the states of all of the information that we need for this form

//TODO: create three components for the three different types of inputs we want: 1. field input 2. calendar 3. dropdown. All three of these components will have their own state. This state will be updated via an onChange(), or onSubmit(). These child components will then use the parent setState() from FormCarousel and pass in their child state to update the state object here in FormCarousel. The goal is to take all of the information that the user gives us from FormCarousel, create an object out of it, and then send that up to Firebase.

//NOTE: maybe a better way to organize the components is by questions. Maybe one component for the first form, another component for the calendar, another component for the venue questions. This way there are three components, and will receive labels as props. 

//TODO: create a page that prints out all of their details provided and confirm the details they'd just filled out. Just like the DMV or something.

export const FormCarousel = () => {
  return (
    <Segment style={{ border: "none", margin: '55px'}}>
      <Carousel>
        <EventDetailsForm label={"first"}/>
        <PersonInfoForm label={"second"}/>
        <VenueDetailsForm label={"third"}/>
      </Carousel>
    </Segment>
  );
};
