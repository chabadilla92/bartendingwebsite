import React from "react";
import InstructionList from "../components/InstructionList";
import PageHeader from "../components/PageHeader";

const headerProps = {
  title: "how this works",
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
      <PageHeader header={headerProps} />
      <InstructionList instructions={instructionListProps} />
    </div>
  );
};

export default Services;
