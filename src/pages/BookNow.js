import React from "react";
import InstructionList from "../components/InstructionList";
import Jumbotron from "../components/Jumbotron";
import PageHeader from "../components/PageHeader";

const firstHeaderProps = {
  title: "how this works",
  subheader: "",
};

const secondHeaderProps = {
  title: "catering packages",
  subheader: "",
};

const instructionListProps =[
  {
    header: "give us the details of your event",
    number: "1",
    id: 1
  },
  {
    header: "tell us what the vibe is",
    number: "2",
    id: 2
  },
  {
    header: "we'll reach out and confirm!",
    number: "3",
    id: 3
  },
]

const BookNow = () => {
  return (
    <div>
      <Jumbotron />
      <PageHeader header={firstHeaderProps} />
      <InstructionList instructions={instructionListProps} />
      <PageHeader header={secondHeaderProps} />
    </div>
  );
};

export default BookNow;
