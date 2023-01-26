import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

import '../css/booknowstyles.css';

const Wrapper = styled.div`
  padding-bottom: 1rem;
`;

const PageHeader = ({ header }) => {
  return (
    <Wrapper>
      <Header
        as='h1'
        content={header.title}
        subheader={header.subheader}
      ></Header>
    </Wrapper>
  );
};

export default PageHeader;
