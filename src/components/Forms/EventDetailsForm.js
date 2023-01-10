import React, { useState } from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

const timeOptions = [
  { key: "1", text: "1-2", value: "1-2" },
  { key: "2", text: "2-4", value: "2-4" },
  { key: "3", text: "4-6", value: "4-6" },
];

const EventDetailsForm = () => {
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventGuests, setEventGuests] = useState("");
  const [eventHours, setValues] = useState({hours: ""});

  const onChange = (event, result) => {
    const { name, value } = result || event.target;
    setValues({ ...eventHours, [name]: value});
  };


  return (
    <div className="carousel-item">
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="When is your event?"
            placeholder="e.g. 10/27/22..."
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <Form.Field
            control={Input}
            label="What time?"
            placeholder="Guests arrive..."
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
          <Form.Dropdown
            name="hours"
            label="How many hours is the event?"
            selection
            onChange={onChange}
            options={timeOptions}
            value={eventHours.hours}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="What kind of event are you hosting?"
          placeholder="Special Occasion, Work Event, etc..."
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        />
        <Form.Field
          fluid={true}
          control={Input}
          label="How many guests?"
          placeholder="Estimated Figure..."
          value={eventGuests}
          onChange={(e) => setEventGuests(e.target.value)}
        />
      </Form>
    </div>
  );
};

export default EventDetailsForm;
