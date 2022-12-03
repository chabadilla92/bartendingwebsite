import { useState } from "react";
import styled from "styled-components";
import { Button, Header, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 50px;
`;

const ButtonSection = ({ header, buttonText, path, handleJumboSelect }) => {
  const [activeItem, setActiveItem] = useState("")

  const handleJumboImage = (e, {name}) => {
    handleJumboSelect(e, name)
    setActiveItem({name})
    console.log(name)
  }

  return (
    <Wrapper>
      <Container>
        <Header as="h1" textAlign="center" dividing>
          <p>{header}</p>
          <Link to={path}>
            <Button
             primary
             name={path}
             active={activeItem === {path}}
             onClick={handleJumboImage}
             >{buttonText}</Button>
          </Link>
        </Header>
      </Container>
    </Wrapper>
  );
};

export default ButtonSection;
