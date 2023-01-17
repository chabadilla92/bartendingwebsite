import "../css/jumbotron.css";
import booking from "../images/booking.avif";
import faq from "../images/faq.avif";
import home from "../images/home.avif";


const jumbotronData = [
  {
    path: "/",
    title: "welcome",
    img: <img src={home} alt="" />,
  },
  {
    path: "/booking",
    title: "services",
    img: <img src={booking} alt="" />,
  },
  {
    path: "/questions",
    title: "faq",
    img: <img src={faq} alt="" />,
  },
];

const Jumbotron = () => {

  return (
    <div>
      {jumbotronData.map((data) => {
        if (data.path === window.location.pathname) {
          return (
            <div className="jumbotron" key={data.path}>
              <div className="jumbo-title">{data.title}</div>
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
