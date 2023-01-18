import React from "react";
import { Accordion } from "semantic-ui-react";

const AccordionContainer = ({panels}) => {
  return (
    <div style={{ margin: '95px'}}>
      <Accordion fluid styled defaultActiveIndex={0} panels={panels} />
    </div>
  );
};

export default AccordionContainer;
