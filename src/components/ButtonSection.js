import React, { useState } from "react";
import styled from "styled-components";
import { Button, Header, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 50px;
`;


const ButtonSection = ({ header, buttonText, path, page }) => {
  // const [page, setPage] = useState("");
  
  // const handlePageNavigate = () => {

  // }
  console.log(page)

  return (
    <Wrapper>
      <Container>
        <Header as="h1" textAlign="center" dividing>
          <p>{header}</p>
          <Link to={path}>
            <Button primary>{buttonText}</Button>
          </Link>
        </Header>
      </Container>
    </Wrapper>
  );
};

export default ButtonSection;
