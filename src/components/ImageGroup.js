import React from "react";
import styled from "styled-components";
import { Grid, Image, Divider } from "semantic-ui-react";

// TODO: import event images here
import home from "../images/home.avif";
import booking from "../images/booking.avif";
import contact from "../images/contact.avif";

const Wrapper = styled.div`
  margin: 55px;
  height: 100%;
  display: flex;
`;

const Img = styled.div`
  object-fit: contain;
`;

//TODO: replace all Images with event images. 
const ImageGroup = () => {
  return (
    <Wrapper>
      <Grid columns={4} stackable>
        <Grid.Column>
          <Img>
            <Image src={null} fluid />
          </Img>
        </Grid.Column>
        <Grid.Column>
          <Img>
            <Image src={null} fluid />
          </Img>
        </Grid.Column>
        <Grid.Column>
          <Img>
            <Image src={null} fluid />
          </Img>
        </Grid.Column>
        <Grid.Column>
          <Img>
            <Image src={null} fluid />
          </Img>
        </Grid.Column>
      </Grid>
      <Divider />
    </Wrapper>
  );
};

export default ImageGroup;
