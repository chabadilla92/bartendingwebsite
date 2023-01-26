import React from 'react';
import AccordionContainer from '../components/AccordionContainer';
import Jumbotron from '../components/Jumbotron';
import PageHeader from '../components/PageHeader';

import '../css/questions.css';

const header = {
  title: 'frequently asked questions',
  subheader: null,
};

const panels = [
  {
    key: 1,
    title: 'what is included in your services/packages?',
    content: [
      'we provide beverage catering services suited for any event/party. ',
      'your beverage package is completely customizable with different rates ',
      "based on the needs of your event. whether you're hosting a small event with wines ",
      'and beer, or are hosting a party that requires specialty cocktails, were super chill',
    ],
  },
  {
    key: 2,
    title: 'what is the cost?',
    content: [
      'the price breakdown for beverages is based on your budget and party size. ',
      'our team will compile the details of your event to give you a beverage list (and cost breakdown) that is best suited for your needs. separate from the beverage cost, we charge a flat service fee',
      'based on the of amount of bartenders needed, duration of the event, and any licensing needed for the event ',
    ],
  },
  {
    key: 3,
    title: 'where are you located?',
    content: [
      'we operate from san francisco and san mateo but offer services to the entire ',
      'bay area. we are open to travel throughout california for events but charge a fee ',
      'based on travel time/distance',
    ],
  },
];

const Questions = () => {
  return (
    <div className='faqContainer'>
      <Jumbotron />
      <h1>frequently asked questions.</h1>
      <AccordionContainer panels={panels} />
    </div>
  );
};

export default Questions;
