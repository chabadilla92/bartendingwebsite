import React from "react";
import "../css/jumbotron.css";
import booking from '../images/booking.avif';
import contact from '../images/contact.avif';
import faq from '../images/faq.avif';
import home from '../images/home.avif';
import services from '../images/services.avif';


const jumbotronData = [
  {
    id: '/',
    img: <img className="ui fluid image" src={home} alt=""/>,
  },
  {
    id: '/booking',
    title: 'book now',
    img: <img className="ui fluid image" src={booking} alt=""/>
  },
  {
    id: '/contact',
    title: 'contact us',
    img: <img className="ui fluid image" src={contact} alt=""/>
  },
  {
    id: '/questions',
    title: 'faq',
    img: <img className="ui fluid image" src={faq} alt=""/>
  },
  {
    id: '/services',
    title: 'services',
    img: <img className="ui fluid image" src={services} alt=""/>
  },
]

const Jumbotron = () => {
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
