import '../css/jumbotron.css';
import booking from '../images/booking.avif';
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
    title: '',
    img: <img src={booking} alt='' />,
  },
  {
    path: '/questions',
    title: '',
    img: <img src={null} alt='' />,
  },
];

const Jumbotron = () => {
  return (
    <div>
      {jumbotronData.map((data) => {
        if (data.path === window.location.pathname) {
          return (
            <div
              className={
                data.path === '/'
                  ? 'parallaxContainer'
                  : data.path === '/booking'
                  ? 'bookingContainer'
                  : data.path === '/questions'
                  ? 'questionsContainer'
                  : 'parallaxContainer'
              }
            >
              <div
                className={
                  data.path === '/'
                    ? 'jumbo-title'
                    : data.path === '/booking'
                    ? 'booking-title'
                    : 'jumbo-title'
                }
              >
                {data.title}
              </div>
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
