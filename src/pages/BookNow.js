import React from 'react';
import {} from 'react-icons/gi';

import { FormCarousel } from '../components/FormCarousel';

import PageHeader from '../components/PageHeader';

import '../css/booknowstyles.css';

const firstHeaderProps = {
  title: "here's how it works..",
  subheader: '',
};


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
