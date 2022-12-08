import "../css/jumbotron.css";
import booking from "../images/booking.avif";
import contact from "../images/contact.avif";
import faq from "../images/faq.avif";
import home from "../images/home.avif";
import services from "../images/services.avif";

const jumbotronData = [
  {
    path: "/",
    title: "welcome",
    img: <img src={home} alt="" />,
  },
  {
    path: "/booking",
    title: "book now",
    img: <img src={booking} alt="" />,
  },
  {
    path: "/contact",
    title: "contact us",
    img: <img src={contact} alt="" />,
  },
  {
    path: "/questions",
    title: "faq",
    img: <img src={faq} alt="" />,
  },
  {
    path: "/services",
    title: "services",
    img: <img src={services} alt="" />,
  },
];

const Jumbotron = () => {

  return (
    <div>
      {jumbotronData.map((data) => {
        if (data.path === window.location.pathname) {
          return (
            <div className="jumbotron" key={data.path}>
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
