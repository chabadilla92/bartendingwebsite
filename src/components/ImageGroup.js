import React from "react";
import styled from "styled-components";
import { Grid, Image, Divider } from "semantic-ui-react";
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

const ImageGroup = () => {
  return (
    <Wrapper>
      <Grid columns={4} stackable>
        <Grid.Column>
          <Img>
            <Image src={home} fluid />
          </Img>
        </Grid.Column>
        <Grid.Column>
          <Img>
            <Image src={booking} fluid />
          </Img>
        </Grid.Column>
        <Grid.Column>
          <Img>
            <Image src={contact} fluid />
          </Img>
        </Grid.Column>
        <Grid.Column>
          <Img>
            <Image src={booking} fluid />
          </Img>
        </Grid.Column>
      </Grid>
      <Divider />
    </Wrapper>
  );
};

export default ImageGroup;
