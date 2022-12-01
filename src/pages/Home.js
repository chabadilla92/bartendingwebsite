import React from "react";
import PageHeader from "../components/PageHeader";
import home from "../images/home.avif";
import ImageAndInfo from "../components/ImageAndInfo";

const header = {
  title: "Just Chill'd",
  subheader: "bartending website testing subheader",
};

const info = {
  title: "about us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
};

const Home = () => {
  return (
    <div className="home">
      <PageHeader header={header} />
      <ImageAndInfo
        image={home}
        title={info.title}
        description={info.description}
      />
    </div>
  );
};

export default Home;
