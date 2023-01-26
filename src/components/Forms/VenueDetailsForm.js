import React from "react";
import { Checkbox, Form, TextArea } from "semantic-ui-react";

const vibeOptions = [
  { key: "1", text: "casual", value: "casual" },
  { key: "2", text: "formal", value: "formal" },
  { key: "3", text: "upbeat", value: "upbeat" },
  { key: "4", text: "club scene", value: "club scene" },
];

const yesOrNo = [
  { key: "1", text: "yes", value: "yes" },
  { key: "2", text: "no", value: "no" },
];

const publicOptions = [
  { key: "1", text: "public", value: "public" },
  { key: "2", text: "private", value: "private" },
];

const VenueDetailsForm = ({ venueDetails, setVenueDetails, alcoholTypes, setAlcoholTypes }) => {

  const handleInputChange = (event, result) => {
    const { name, value } = result || event.target;
    setVenueDetails({ ...venueDetails, [name]: value });
  };

  return (
    <div className="carousel-item">
      <Form>
        <Form.Group widths="equal">
          <Form.Dropdown
            onChange={handleInputChange}
            name="vibe"
            value={venueDetails.vibe}
            selection
            options={vibeOptions}
            label={{
              children: "what is the vibe?",
            }}
          />
          <Form.Dropdown
            onChange={handleInputChange}
            name="publicPrivate"
            value={venueDetails.publicPrivate}
            selection
            options={publicOptions}
            label={{
              children: "public or private event?",
            }}
          />
          <Form.Dropdown
            onChange={handleInputChange}
            name="barProvided"
            value={venueDetails.barProvided}
            selection
            options={yesOrNo}
            label={{
              children: "is there a bar provided?",
            }}
          />
          <Form.Dropdown
            onChange={handleInputChange}
            name="tipJarsAllowed"
            value={venueDetails.tipJarsAllowed}
            selection
            options={yesOrNo}
            label={{
              children: "are tip jars allowed?",
            }}
          />
        </Form.Group>

{/* TODO: This needs to be a checkbox option, 'do you need any of the following? check all that apply.' glass cups, disposable cups, ice, napkins, straws */}
        <Form.Field
          control={TextArea}
          name="miscellaneousItems"
          value={venueDetails.miscellaneousItems}
          onChange={handleInputChange}
          label="do you need any of the following?"
          placeholder="disposable cups, napkins, ice, etc..."
        />

{/* TODO: 1. question needs to be changed to 'which of the following beverages do you need?' 2. beer and wine need to be on separate checkboxes, liquor and mixed drinks should be in separate checkboxes, mixed drinks needs to be changed to 'mixed/well drinks', change non-alcoholic to virgin cocktails. 3. add the following checkboxes: juices, soda, club soda */}
        <Form.Group grouped>
          <label>
            what kind of alcohol would you like us to provide? check all that
            apply.
          </label>
          <Form.Field
            label="beer/wine"
            name="beerWine"
            control={Checkbox}
            checked={alcoholTypes.beerWine}
            onChange={e => setAlcoholTypes({...alcoholTypes, beerWine: !alcoholTypes.beerWine})}
            type="checkbox"
          />
          <Form.Field
            label="liquor/ mixed drinks"
            name="liquorMixedDrink"
            control={Checkbox}
            checked={alcoholTypes.liquorMixedDrink}
            onChange={e => setAlcoholTypes({...alcoholTypes, liquorMixedDrink: !alcoholTypes.liquorMixedDrink})}
            type="checkbox"
          />
          <Form.Field
            label="specialty cocktails"
            name="specialCocktail"
            control={Checkbox}
            checked={alcoholTypes.specialCocktail}
            onChange={e => setAlcoholTypes({...alcoholTypes, specialCocktail: !alcoholTypes.specialCocktail})}
            type="checkbox"
          />
          <Form.Field
            label="non-alcoholic"
            name="nonAlcoholic"
            control={Checkbox}
            checked={alcoholTypes.nonAlcoholic}
            onChange={e => setAlcoholTypes({...alcoholTypes, nonAlcoholic: !alcoholTypes.nonAlcoholic})}
            type="checkbox"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default VenueDetailsForm;
