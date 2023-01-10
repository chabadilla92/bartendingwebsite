import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

const PersonalDetailsForm = () => (
  <div className="carousel-item">
    <Form>
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="First Name"
          placeholder="First Name..."
        />
        <Form.Field
          control={Input}
          label="Last Name"
          placeholder="Last Name..."

        />
        <Form.Field
          control={Input}
          label="Email"
          placeholder="Email..."
        />

      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="What is your Total Budget?"
        />
        <Form.Field
          control={Input}
          label="Please Confirm Where you Need the Bartender"
          placeholder="Enter Zipcode of Event..."

        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="Any Additional Details We Need to Know? "
        placeholder="Optional Details Here..."
      />
    </Form>
  </div>
);

export default PersonalDetailsForm;
