import React from "react";
import "../css/instructionList.css"
import { InstructionItem } from "./InstructionItem";

const InstructionList = ({ instructions }) => {
  const renderedList = instructions.map((instruction) => {
    return <InstructionItem 
        key={instruction.id}
        number={instruction.number}
        header={instruction.header}
    />
  })

  return (
    <div className="ui container" id="instruction">
      <div className="wrapper">
        {renderedList}
      </div>
    </div>
  );
};

export default InstructionList;
