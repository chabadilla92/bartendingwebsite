import React from "react";
import { Form, Select, TextArea } from "semantic-ui-react";

const vibeOptions = [
  { key: "1", text: "Casual", value: "Casual" },
  { key: "2", text: "Formal", value: "Formal" },
  { key: "3", text: "Upbeat", value: "Upbeat" },
  { key: "4", text: "Club Scene", value: "Club Scene" },
];

const barOptions = [
  { key: "1", text: "Yes", value: "Yes" },
  { key: "2", text: "No", value: "No" },
];

const publicOptions = [
  { key: "1", text: "Public", value: "Public" },
  { key: "2", text: "Private", value: "Private" },
];

const VenueDetailsForm = () => (
  <div className="carousel-item">
    <Form>
      <Form.Group widths="equal">
        <Form.Field
          control={Select}
          width={5}
          options={vibeOptions}
          label={{
            children: "What's the Vibe?",
          }}
        />
        <Form.Field
          control={Select}
          width={5}
          options={publicOptions}
          label={{
            children: "Public or Private?",
          }}
        />
        <Form.Field
          control={Select}
          width={5}
          options={barOptions}
          label={{
            children: "Is there a bar provided?",
          }}
        />
        <Form.Field
          control={Select}
          options={barOptions}
          label={{
            children: "Tip jars allowed?",
          }}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field
          control={TextArea}
          label="Should we bring miscellaneous items?"
          fluid
          placeholder="Disposable cups, napkins, coasters, etc..."
        />
      </Form.Group>

      <Form.Group grouped>
        <label>
          What kind of Alcohol would you like us to provide? Check all that
          apply.
        </label>
        <Form.Field label="Beer/Wine" control="input" type="checkbox" />
        <Form.Field
          label="Liquor/ Mixed Drinks"
          control="input"
          type="checkbox"
        />
        <Form.Field
          label="Specialty Cocktails"
          control="input"
          type="checkbox"
        />
        <Form.Field label="Non-Alcoholic " control="input" type="checkbox" />
      </Form.Group>
    </Form>
  </div>
);

export default VenueDetailsForm;
