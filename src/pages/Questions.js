import React from "react";
import Jumbotron from "../components/Jumbotron";
import PageHeader from "../components/PageHeader";

const header = {
  title: "frequently asked questions",
  subheader: null,
};
const Questions = () => {
  return (
    <div>
      <Jumbotron />
      <PageHeader header={header} />
    </div>
  );
};

export default Questions;
