import React from 'react';
import { FcTodoList, FcFeedback, FcFlashOn } from 'react-icons/fc';
import {} from 'react-icons/gi';

import { FormCarousel } from '../components/FormCarousel';
import InstructionList from '../components/InstructionList';
import Jumbotron from '../components/Jumbotron';
import PageHeader from '../components/PageHeader';

import '../css/booknowstyles.css';

const firstHeaderProps = {
  title: "here's how it works..",
  subheader: '',
};

const secondHeaderProps = {
  title: 'tell us about your event',
  subheader: '',
};

const instructionListProps = [
  {
    header: 'give us the details of your event',
    number: <FcTodoList />,
    id: 1,
  },
  {
    header: 'tell us what the vibe is',
    number: <FcFlashOn />,
    id: 2,
  },
  {
    header: "we'll reach out and confirm!",
    number: <FcFeedback />,
    id: 3,
  },
];

const BookNow = ({ handleCreateDocument }) => {
  return (
    <div className='bookNowContainer'>
      <div className='paragraphContainer'>
        <p className='paragraph'>interested in our beverage catering services?</p>
        <PageHeader header={firstHeaderProps} />
        {/* <InstructionList instructions={instructionListProps} /> */}
        <p className='paragraphTwo'>give us the details of your event</p>
        <p className='paragraphTwo'>by filling out the form below</p>
        <p className='paragraphTwo'>
          a member of our team will reach out to you
        </p>
        <p className='paragraphTwo'>within 1-2 business days</p>
        <p className='paragraphTwo'>
          to answer any questions and discuss next steps!
        </p>
      </div>
      <div className='carouselContainer'>
        {' '}
        <FormCarousel handleCreateDocument={handleCreateDocument} />
      </div>
    </div>
  );
};

export default BookNow;
