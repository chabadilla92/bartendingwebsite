import React, { useState } from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

const PersonalDetailsForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    totalBudget: "",
    zipCode: "",
    additionalDetails: "",
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setPersonalDetails({...personalDetails, [name]: value });
  };

  return (
    <div className="carousel-item">
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="firstName"
            value={personalDetails.firstName}
            onChange={handleInputChange}
            label="First Name"
            placeholder="First Name..."
          />
          <Form.Field
            name="lastName"
            value={personalDetails.lastName}
            onChange={handleInputChange}
            control={Input}
            label="Last Name"
            placeholder="Last Name..."
          />
          <Form.Field
            name="email"
            value={personalDetails.email}
            onChange={handleInputChange}
            control={Input}
            label="Email"
            placeholder="Email..."
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            name="totalBudget"
            value={personalDetails.totalBudget}
            onChange={handleInputChange}
            control={Input}
            label="What is your Total Budget?"
          />
          <Form.Field
            name="zipCode"
            value={personalDetails.zipCode}
            onChange={handleInputChange}
            control={Input}
            label="Please Confirm Where you Need the Bartender"
            placeholder="Enter Zipcode of Event..."
          />
        </Form.Group>
        <Form.Field
          name="additionalDetails"
          value={personalDetails.additionalDetails}
          onChange={handleInputChange}
          control={TextArea}
          label="Any Additional Details We Need to Know? "
          placeholder="Optional Details Here..."
        />
      </Form>
    </div>
  );
};

export default PersonalDetailsForm;
