import styled from "styled-components";
import { Button, Header, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 50px;
`;

const ButtonSection = ({ header, buttonText, path, handlePageSelect }) => {

  const handlePageNavigate = (e, name) => {
    handlePageSelect(e, name)
  }

  return (
    <Wrapper>
      <Container>
        <Header as="h1" textAlign="center" dividing>
          <p>{header}</p>
          <Link to={path}>
            <Button
             primary
             onClick={handlePageNavigate}
             >{buttonText}</Button>
          </Link>
        </Header>
      </Container>
    </Wrapper>
  );
};

export default ButtonSection;
