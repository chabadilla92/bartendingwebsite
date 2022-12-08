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
    header: "pick your catering package",
    number: "1",
    id: 1
  },
  {
    header: "select your drinks",
    number: "2",
    id: 2
  },
  {
    header: "service and equipment",
    number: "3",
    id: 3
  },
]

const Services = () => {
  return (
    <div>
      <Jumbotron />
      <PageHeader header={firstHeaderProps} />
      <InstructionList instructions={instructionListProps} />
      <PageHeader header={secondHeaderProps} />
    </div>
  );
};

export default Services;
