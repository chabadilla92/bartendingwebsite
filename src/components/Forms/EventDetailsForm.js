import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

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
            label="When is your event?"
            placeholder="e.g. 10/27/22..."
            value={eventDetails.date}
            name="date"
            onChange={handleInputChange}
          />
          <Form.Field
            control={Input}
            label="What time?"
            placeholder="Guests arrive..."
            value={eventDetails.time}
            name="time"
            onChange={handleInputChange}
          />
          <Form.Dropdown
            name="eventHours"
            label="How many hours is the event?"
            selection
            onChange={handleInputChange}
            options={timeOptions}
            value={eventDetails.eventHours}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="What's the occasion?"
          placeholder="Special Occasion, Work Event, etc..."
          value={eventDetails.occasion}
          name="occasion"
          onChange={handleInputChange}
        />
        <Form.Field
          fluid={true}
          control={Input}
          label="How many guests?"
          placeholder="Estimated Figure..."
          value={eventDetails.guestCount}
          name="guestCount"
          onChange={handleInputChange}
        />
      </Form>
    </div>
  );
};

export default EventDetailsForm;
