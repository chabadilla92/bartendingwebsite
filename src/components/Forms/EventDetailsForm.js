import React, { useState } from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

const timeOptions = [
  { key: "1", text: "1-2", value: "1-2" },
  { key: "2", text: "2-4", value: "2-4" },
  { key: "3", text: "4-6", value: "4-6" },
];

const EventDetailsForm = () => {
  const [eventDetails, setEventDetails] = useState({
    date:"",
    time:"",
    occasion:"",
    guestCount:"",
  })
  const [eventHours, setEventHours] = useState({hours: ""});

  const handleDropdown = (event, result) => {
    const { name, value } = result || event.target;
    setEventHours({ [name]: value });
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setEventDetails({...eventDetails, [name]: value});
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
            name="hours"
            label="How many hours is the event?"
            selection
            onChange={handleDropdown}
            options={timeOptions}
            value={eventHours.hours}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="What kind of event are you hosting?"
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
