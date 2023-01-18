import React from "react";
import PageHeader from "../components/PageHeader";
import ImageAndInfo from "../components/ImageAndInfo";
import ButtonSection from "../components/ButtonSection";
import ImageGroup from "../components/ImageGroup";
import { Divider } from "semantic-ui-react";

import home from "../images/home.avif";
import Jumbotron from "../components/Jumbotron";


const headerProps = {
  title: "Just Chill'd",
  subheader: "bartending website testing subheader",
};

const buttonProps = {
  header: "planning your next event?",
  buttonText: "Book Now",
  path: "/booking",
};

const infoProps = {
  title: "about us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
};

const Home = ({ handleJumboSelect }) => {
  return (
    <div className="home">
      <Jumbotron />
      <PageHeader header={headerProps} />
      <ImageAndInfo
        image={home}
        title={infoProps.title}
        description={infoProps.description}
      />
      <Divider />
      <ButtonSection
        handleJumboSelect={handleJumboSelect}
        buttonText={buttonProps.buttonText}
        header={buttonProps.header}
        path={buttonProps.path}
      />
      <ImageGroup />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
