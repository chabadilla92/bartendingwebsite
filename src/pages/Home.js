import React from "react";
import PageHeader from "../components/PageHeader";
import home from "../images/home.avif";
import ImageAndInfo from "../components/ImageAndInfo";
import ButtonSection from "../components/ButtonSection";
import { Divider } from "semantic-ui-react";

const header = {
  title: "Just Chill'd",
  subheader: "bartending website testing subheader",
};

const button = {
  header: "planning your next event?",
  buttonText: "Book Now",
  path: "/booking",
};

const info = {
  title: "about us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
};

const Home = ({ page }) => {
  return (
    <div className="home">
      <PageHeader header={header} />
      <ImageAndInfo
        image={home}
        title={info.title}
        description={info.description}
      />
      <Divider />
      <ButtonSection
        page={page}
        buttonText={button.buttonText}
        header={button.header}
        path={button.path}
      />
    </div>
  );
};

export default Home;
