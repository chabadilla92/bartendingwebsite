import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";

const PersonalDetailsForm = ({ personalDetails, setPersonalDetails }) => {

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
            label="first name"
            placeholder="first name..."
          />
          <Form.Field
            name="lastName"
            value={personalDetails.lastName}
            onChange={handleInputChange}
            control={Input}
            label="last name"
            placeholder="last name..."
          />
          <Form.Field
            name="email"
            value={personalDetails.email}
            onChange={handleInputChange}
            control={Input}
            label="email"
            placeholder="email..."
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            name="totalBudget"
            placeholder="$"
            value={personalDetails.totalBudget}
            onChange={handleInputChange}
            control={Input}
            label="what is your budget (total cost for liquor + services) ?"
          />
          <Form.Field
            name="zipCode"
            value={personalDetails.zipCode}
            onChange={handleInputChange}
            control={Input}
            label="where is the event located?"
            placeholder="enter zip code..."
          />
        </Form.Group>
        <Form.Field
          name="additionalDetails"
          value={personalDetails.additionalDetails}
          onChange={handleInputChange}
          control={TextArea}
          label="anything else we should know? "
          placeholder="optional details here..."
        />
      </Form>
    </div>
  );
};

export default PersonalDetailsForm;
