import React from "react";
import { Form, Input, TextArea, Select } from "semantic-ui-react";

const genderOptions = [
  { key: "1", text: "1-2", value: "1-2" },
  { key: "2", text: "2-4", value: "2-4" },
  { key: "3", text: "4-6", value: "4-6" },
];

const EventDetailsForm = () => (
  <div className="carousel-item">
    <Form>
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="When is your event?"
          placeholder="e.g. 10/27/22..."
        />
        <Form.Field
          control={Input}
          label="What time?"
          placeholder="Guests arrive..."
          
        />
        <Form.Field
          control={Select}
          
          options={genderOptions}
          label={{
            children: "For how many hours?",
          }}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="What kind of event are you hosting?"
        placeholder="Special Occasion, Work Event, etc..."
      />
      <Form.Field
        control={Input}
        label="How many guests?"
        fluid
        placeholder="Estimated Figure..."
      />
    </Form>
  </div>
);

export default EventDetailsForm;
