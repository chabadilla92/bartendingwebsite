import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

//TODO: initialize the states of all of the information that we need for this form
//TODO: create three components for the three different types of inputs we want: 1. field input 2. calendar 3. dropdown. All three of these components will have their own state. This state will be updated via an onChange(), or onSubmit(). These child components will then use the parent setState() from FormCarousel and pass in their child state to update the state object here in FormCarousel. The goal is to take all of the information that the user gives us from FormCarousel, create an object out of it, and then send that up to Firebase. 
//TODO: create a page that prints out all of their details provided and confirm the details they'd just filled out. Just like the DMV or something. 

export const FormCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={20}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}>I am the first Slide.</Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};
