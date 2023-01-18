import React from "react";
import AccordionContainer from "../components/AccordionContainer";
import Jumbotron from "../components/Jumbotron";
import PageHeader from "../components/PageHeader";

const header = {
  title: "frequently asked questions",
  subheader: null,
};

const panels = [
  {
    key: 1,
    title: "GeeksforGeeks",
    content: [
      "Semantic UI is a modern framework used in developing seamless designs",
      "for the website, Its gives the user a lightweight experience with its",
      "components. It uses the predefined CSS, JQuery language to incorporate",
      "in different framework",
    ],
  },
  {
    key: 2,
    title: "ReactJS",
    content: [
      "Semantic UI is a modern framework used in developing seamless designs",
      "for the website, Its gives the user a lightweight experience with its",
      "components. It uses the predefined CSS, JQuery language to incorporate",
      "in different framework",
    ],
  },
  {
    key: 3,
    title: "Semestic UI",
    content: [
      "Semantic UI is a modern framework used in developing seamless designs",
      "for the website, Its gives the user a lightweight experience with its",
      "components. It uses the predefined CSS, JQuery language to incorporate",
      "in different framework",
    ],
  },
];

const Questions = () => {
  return (
    <div>
      <Jumbotron />
      <PageHeader header={header} />
      <AccordionContainer panels={panels}/>
      {/* <Footer /> */}
    </div>
  );
};

export default Questions;
