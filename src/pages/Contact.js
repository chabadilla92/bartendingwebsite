import React from "react";
import Jumbotron from "../components/Jumbotron";
import PageHeader from "../components/PageHeader";

const header = {
  title: "send us an email!",
  subheader: "we'd love to hear from you",
};
const Contact = () => {
  return (
    <div>
      <Jumbotron />
      <PageHeader header={header} />
    </div>
  );
};

export default Contact;
