import React from "react";
import ImageAndInfo from "../components/ImageAndInfo";
import ButtonSection from "../components/ButtonSection";
import ImageGroup from "../components/ImageGroup";

import socialbar from "../images/socialbar.jpg"
import Jumbotron from "../components/Jumbotron";


const buttonProps = {
  header: "planning your next event?",
  buttonText: "book now.",
  path: "/booking",
};

const infoProps = {
  title: "about us",
  description:
    "We are a family-owned bartending service based in the San Francisco Bay Area and we would love to host your next party. Whether it's a small get together with family and friends or a large corporate event, we got you covered. We would like to invite you to kick back, sip on one of our delicious drinks, and have a just chill'd moment on us.",
};

const Home = ({ handleJumboSelect }) => {
  return (
    <div className="home">
      <Jumbotron />
      <ImageAndInfo
        image={socialbar}
        title={infoProps.title}
        description={infoProps.description}
      />
      <ButtonSection
        handleJumboSelect={handleJumboSelect}
        buttonText={buttonProps.buttonText}
        header={buttonProps.header}
        path={buttonProps.path}
      />
      <ImageGroup />
    </div>
  );
};

export default Home;
