import React from "react";
import "../css/jumbotron.css";

const Jumbotron = ({ jumbotronData }) => {
  const renderedImage = jumbotronData.map((data) => {
    if (data.id === window.location.pathname) {
      return (
        <div key={data.id}>
          {data.title}
          {data.img}
        </div>
      );
    } else {
      return null;
    }
  });

  return <div>{renderedImage}</div>;
};

export default Jumbotron;
