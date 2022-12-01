import React from "react";
import { Header, Container } from "semantic-ui-react";

const PageHeader = ({ header }) => {
  return (
    <Container>
      <Header
        as="h1"
        content={header.title}
        subheader={header.subheader}
        textAlign="center"
        dividing
      ></Header>
    </Container>
  );
};

export default PageHeader;
