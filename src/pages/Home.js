import React from "react";
import PageHeader from "../components/PageHeader";

const header = {
  title: "Just Chill'd",
  subheader: "bartending website testing subheader"
}

const Home = () => {
  return (
    <div className="home">
      <PageHeader header={header} />
    </div>
  );
};

export default Home;
