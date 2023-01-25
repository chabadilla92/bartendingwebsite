import React from "react";
import PageHeader from "../components/PageHeader";
import ImageAndInfo from "../components/ImageAndInfo";
import ButtonSection from "../components/ButtonSection";
import ImageGroup from "../components/ImageGroup";
import { Divider } from "semantic-ui-react";

import socialbar from "../images/socialbar.jpg"
import home from "../images/home.avif";
import Jumbotron from "../components/Jumbotron";


const headerProps = {
  title: "",
  subheader: "",
};

const buttonProps = {
  header: "planning your next event?",
  buttonText: "book now.",
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
