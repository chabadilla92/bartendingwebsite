import React from "react";
import styled from "styled-components";
import { Header, Container } from "semantic-ui-react";

const Wrapper = styled.div`
  margin-top: 50px;
`;

const PageHeader = ({ header }) => {
  return (
    <Wrapper>
      <Container>
        <Header
          as="h1"
          content={header.title}
          subheader={header.subheader}
          textAlign="center"
        ></Header>
      </Container>
    </Wrapper>
  );
};

export default PageHeader;
