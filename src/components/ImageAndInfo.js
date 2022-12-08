import React from "react";
import styled from "styled-components";
import { Image, Grid, Divider } from "semantic-ui-react";

const Wrapper = styled.div`
  margin: 55px;
  height: 100%;
  display: flex;
`;

const Img = styled.div`
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 20px;
`;
const Description = styled.p`
  font-size: 15px;
  letter-spacing: 1px;
`;

const ImageAndInfo = ({ image, title, description }) => {
  return (
    <Wrapper>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column>
          <Img>
            <Image src={image} fluid />
          </Img>
        </Grid.Column>
        <Grid.Column>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Grid.Column>
      </Grid>
      <Divider />
    </Wrapper>
  );
};

export default ImageAndInfo;
