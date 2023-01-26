import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import "../../css/carousel.css"

const timeOptions = [
  { key: "1", text: "1-2", value: "1-2" },
  { key: "2", text: "2-4", value: "2-4" },
  { key: "3", text: "4-6", value: "4-6" },
];

const EventDetailsForm = ({ eventDetails, setEventDetails}) => {

  const handleInputChange = (event, result) => {
    const { name, value } = result || event.target;
    setEventDetails({...eventDetails, [name]: value });
  };


  return (
    <div className="carousel-item">
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="when is your event?"
            placeholder="e.g. 10/27/22..."
            value={eventDetails.date}
            name="date"
            onChange={handleInputChange}
          />
          <Form.Field
            control={Input}
            label="what time?"
            placeholder="guests will arrive at..."
            value={eventDetails.time}
            name="time"
            onChange={handleInputChange}
          />
          <Form.Dropdown
            name="eventHours"
            label="how many hours is the event?"
            selection
            onChange={handleInputChange}
            options={timeOptions}
            value={eventDetails.eventHours}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="what's the occasion?"
          placeholder="special occasion, work event, birthday, etc..."
          value={eventDetails.occasion}
          name="occasion"
          onChange={handleInputChange}
        />
        <Form.Field
          fluid={true}
          control={Input}
          label="how many guests?"
          placeholder="what is the expected guest size..."
          value={eventDetails.guestCount}
          name="guestCount"
          onChange={handleInputChange}
        />
      </Form>
    </div>
  );
};

export default EventDetailsForm;
