import React from "react";
import { Header, Icon } from "semantic-ui-react";

export const InstructionItem = ({ number, header}) => {
  return (
    <Header as="h2" textAlign="center">
      <Icon >
        {number}
      </Icon>
      <Header.Content>{header}</Header.Content>
    </Header>
  );
};
