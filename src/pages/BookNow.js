import React from "react";
import { FcTodoList, FcFeedback, FcFlashOn  } from "react-icons/fc";
import {  } from "react-icons/gi";
import Footer from "../components/Footer";


import { FormCarousel } from "../components/FormCarousel";
import InstructionList from "../components/InstructionList";
import Jumbotron from "../components/Jumbotron";
import PageHeader from "../components/PageHeader";

const firstHeaderProps = {
  title: "how this works",
  subheader: "",
};

const secondHeaderProps = {
  title: "tell us about your event",
  subheader: "",
};

const instructionListProps = [
  {
    header: "give us the details of your event",
    number: <FcTodoList />,
    id: 1,
  },
  {
    header: "tell us what the vibe is",
    number: <FcFlashOn />,
    id: 2,
  },
  {
    header: "we'll reach out and confirm!",
    number: <FcFeedback />,
    id: 3,
  },
];

const BookNow = ({ handleCreateDocument }) => {
  return (
    <div>
      <Jumbotron />
      <PageHeader header={firstHeaderProps} />
      <InstructionList instructions={instructionListProps} />
      <PageHeader header={secondHeaderProps} />
      <FormCarousel handleCreateDocument={handleCreateDocument}/>
      <Footer />
    </div>
  );
};

export default BookNow;
