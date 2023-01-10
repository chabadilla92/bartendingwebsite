import React, { useState } from "react";
import { Checkbox, Form, TextArea } from "semantic-ui-react";

const vibeOptions = [
  { key: "1", text: "Casual", value: "Casual" },
  { key: "2", text: "Formal", value: "Formal" },
  { key: "3", text: "Upbeat", value: "Upbeat" },
  { key: "4", text: "Club Scene", value: "Club Scene" },
];

const yesOrNo = [
  { key: "1", text: "Yes", value: "Yes" },
  { key: "2", text: "No", value: "No" },
];

const publicOptions = [
  { key: "1", text: "Public", value: "Public" },
  { key: "2", text: "Private", value: "Private" },
];

const VenueDetailsForm = () => {
  const [miscellaneousItems, setMiscellaneousItems] = useState("");
  const [venueDetails, setVenueDetails] = useState({
    vibe: "",
    publicPrivate: "",
    barProvided: "",
    tipJarsAllowed: "",
  });

  const onChange = (event, result) => {
    const { name, value } = result || event.target;
    setVenueDetails({ ...venueDetails, [name]: value });
  };

  return (
    <div className="carousel-item">
      <Form>
        <Form.Group widths="equal">
          <Form.Dropdown
            onChange={onChange}
            name="vibe"
            value={venueDetails.vibe}
            selection
            options={vibeOptions}
            label={{
              children: "What's the Vibe?",
            }}
          />
          <Form.Dropdown
            onChange={onChange}
            name="publicPrivate"
            value={venueDetails.publicPrivate}
            selection
            options={publicOptions}
            label={{
              children: "Public or Private?",
            }}
          />
          <Form.Dropdown
            onChange={onChange}
            name="barProvided"
            value={venueDetails.barProvided}
            selection
            options={yesOrNo}
            label={{
              children: "Is there a bar provided?",
            }}
          />
          <Form.Dropdown
            onChange={onChange}
            name="tipJarsAllowed"
            value={venueDetails.tipJarsAllowed}
            selection
            options={yesOrNo}
            label={{
              children: "Tip jars allowed?",
            }}
          />
        </Form.Group>

        <Form.Field
          control={TextArea}
          value={miscellaneousItems}
          onChange={(e) => setMiscellaneousItems(e.target.value)}
          label="Should we bring miscellaneous items?"
          placeholder="Disposable cups, napkins, coasters, etc..."
        />

        <Form.Group grouped>
          <label>
            What kind of Alcohol would you like us to provide? Check all that
            apply.
          </label>
          <Form.Field
            label="Beer/Wine"
            control={Checkbox}
            type="checkbox"
          />
          <Form.Field
            label="Liquor/ Mixed Drinks"
            control={Checkbox}
            type="checkbox"
          />
          <Form.Field
            label="Specialty Cocktails"
            control={Checkbox}
            type="checkbox"
          />
          <Form.Field
            label="Non-Alcoholic"
            control={Checkbox}
            type="checkbox"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default VenueDetailsForm;
