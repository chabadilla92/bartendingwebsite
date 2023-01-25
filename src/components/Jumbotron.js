import '../css/jumbotron.css';
import booking from '../images/booking.avif';
import faq from '../images/faq.avif';
import home from '../images/home.avif';
import chilldbottles from '../images/chilldbottles.jpg';
import logocopy from '../images/logocopy.svg';

//TODO: Replace img value with real iamges from events.
const jumbotronData = [
  {
    path: '/',
    title: <img src={logocopy} />,
    img: <img src={null} alt='' />,
  },
  {
    path: '/booking',
    title: 'services',
    img: <img src={booking} alt='' />,
  },
  {
    path: '/questions',
    title: 'faq',
    img: <img src={faq} alt='' />,
  },
];

const Jumbotron = () => {
  return (
    <div className='parallaxContainer'>
      {jumbotronData.map((data) => {
        if (data.path === window.location.pathname) {
          return <div className='jumbo-title'>{data.title}</div>;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Jumbotron;
