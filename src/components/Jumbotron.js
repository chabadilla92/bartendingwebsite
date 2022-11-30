import React from "react";
import "../css/jumbotron.css";
import booking from "../images/booking.avif";
import contact from "../images/contact.avif";
import faq from "../images/faq.avif";
import home from "../images/home.avif";
import services from "../images/services.avif";

const jumbotronData = [
  {
    id: "/",
    title: "welcome",
    img: <img src={home} alt="" />,
  },
  {
    id: "/booking",
    title: "book now",
    img: <img src={booking} alt="" />,
  },
  {
    id: "/contact",
    title: "contact us",
    img: <img src={contact} alt="" />,
  },
  {
    id: "/questions",
    title: "faq",
    img: <img src={faq} alt="" />,
  },
  {
    id: "/services",
    title: "services",
    img: <img src={services} alt="" />,
  },
];

const Jumbotron = () => {
  return (
    <div>
      {jumbotronData.map((data) => {
        if (data.id === window.location.pathname) {
          return (
            <div className="jumbotron">
              <div className="title">{data.title}</div>
              <div className="ui fluid image">{data.img}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Jumbotron;
