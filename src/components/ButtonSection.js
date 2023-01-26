import { useState } from 'react';
import styled from 'styled-components';
import { Button, Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import '../css/buttonsection.css';

const Wrapper = styled.div`
  margin-top: 12.5rem;
`;

const ButtonSection = ({ header, buttonText, path, handleJumboSelect }) => {
  const [activeItem, setActiveItem] = useState('');

  const handleJumboImage = (e, { name }) => {
    setActiveItem({ name });
    handleJumboSelect(activeItem, name);
  };

  return (
    <Wrapper>
      <Container>
        <Header as='h1' textAlign='center'>
          <p>{header}</p>
          <Link to={path}>
            <Button
              primary
              name={path}
              active={activeItem === { path }}
              onClick={handleJumboImage}
              className='bookButton'
              style={{
                marginBottom: '15px',
                backgroundColor: 'white',
                color: 'black',
                fontFamily: 'Secular One, sans-serif',
              }}
            >
              {buttonText}
            </Button>
          </Link>
        </Header>
      </Container>
    </Wrapper>
  );
};

export default ButtonSection;
