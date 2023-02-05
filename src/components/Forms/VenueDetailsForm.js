import React from "react";
import { Checkbox, Divider, Form, TextArea } from "semantic-ui-react";

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

const VenueDetailsForm = ({
  venueDetails,
  setVenueDetails,
  alcoholTypes,
  setAlcoholTypes,
  extraItems,
  setExtraItems,
}) => {
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

        {/* CHECKBOX 1 STARTS HERE */}
        <Form.Group inline>
          <Form.Group
            inline
            style={{ marginRight: "auto", marginBottom: "auto" }}
          >
            <Form.Group grouped>
              <label>
                do you need any of the following? Check all that apply
              </label>
              <Form.Field
                label="napkins"
                name="napkins"
                control={Checkbox}
                checked={extraItems.napkins}
                onChange={(e) =>
                  setExtraItems({ ...extraItems, napkins: !extraItems.napkins })
                }
                type="checkbox"
              />
              <Form.Field
                label="straws"
                name="straws"
                control={Checkbox}
                checked={extraItems.straws}
                onChange={(e) =>
                  setExtraItems({ ...extraItems, straws: !extraItems.straws })
                }
                type="checkbox"
              />
              <Form.Field
                label="ice"
                name="ice"
                control={Checkbox}
                checked={extraItems.ice}
                onChange={(e) =>
                  setExtraItems({ ...extraItems, ice: !extraItems.ice })
                }
                type="checkbox"
              />
              <Form.Field
                label="disposable cups"
                name="disposableCups"
                control={Checkbox}
                checked={extraItems.disposableCups}
                onChange={(e) =>
                  setExtraItems({
                    ...extraItems,
                    disposableCups: !extraItems.disposableCups,
                  })
                }
                type="checkbox"
              />
              <Form.Field
                label="glass cups"
                name="glassCups"
                control={Checkbox}
                checked={extraItems.glassCups}
                onChange={(e) =>
                  setExtraItems({
                    ...extraItems,
                    glassCups: !extraItems.glassCups,
                  })
                }
                type="checkbox"
              />
            </Form.Group>
          </Form.Group>

          {/* CHECKBOX 2 STARTS HERE */}
          <Form.Group inline>
            <Form.Group grouped>
              <label>which of the following beverages do you need?</label>
              <Form.Field
                label="beer"
                name="beer"
                control={Checkbox}
                checked={alcoholTypes.beer}
                onChange={(e) =>
                  setAlcoholTypes({ ...alcoholTypes, beer: !alcoholTypes.beer })
                }
                type="checkbox"
              />
              <Form.Field
                label="wine"
                name="wine"
                control={Checkbox}
                checked={alcoholTypes.wine}
                onChange={(e) =>
                  setAlcoholTypes({ ...alcoholTypes, wine: !alcoholTypes.wine })
                }
                type="checkbox"
              />
              <Form.Field
                label="liquor"
                name="liquor"
                control={Checkbox}
                checked={alcoholTypes.liquor}
                onChange={(e) =>
                  setAlcoholTypes({
                    ...alcoholTypes,
                    liquor: !alcoholTypes.liquor,
                  })
                }
                type="checkbox"
              />
              <Form.Field
                label="mixed/ well drinks"
                name="mixedWellDrink"
                control={Checkbox}
                checked={alcoholTypes.mixedWellDrink}
                onChange={(e) =>
                  setAlcoholTypes({
                    ...alcoholTypes,
                    mixedWellDrink: !alcoholTypes.mixedWellDrink,
                  })
                }
                type="checkbox"
              />
              <Form.Field
                label="specialty cocktails"
                name="specialCocktail"
                control={Checkbox}
                checked={alcoholTypes.specialCocktail}
                onChange={(e) =>
                  setAlcoholTypes({
                    ...alcoholTypes,
                    specialCocktail: !alcoholTypes.specialCocktail,
                  })
                }
                type="checkbox"
              />
            </Form.Group>
            <Form.Group grouped>
              <Form.Field
                label="virgin cocktails"
                name="virginCocktails"
                control={Checkbox}
                checked={alcoholTypes.virginCocktails}
                onChange={(e) =>
                  setAlcoholTypes({
                    ...alcoholTypes,
                    virginCocktails: !alcoholTypes.virginCocktails,
                  })
                }
                type="checkbox"
              />
              <Form.Field
                label="juices"
                name="juices"
                control={Checkbox}
                checked={alcoholTypes.juices}
                onChange={(e) =>
                  setAlcoholTypes({
                    ...alcoholTypes,
                    juices: !alcoholTypes.juices,
                  })
                }
                type="checkbox"
              />
              <Form.Field
                label="soda"
                name="soda"
                control={Checkbox}
                checked={alcoholTypes.soda}
                onChange={(e) =>
                  setAlcoholTypes({
                    ...alcoholTypes,
                    soda: !alcoholTypes.soda,
                  })
                }
                type="checkbox"
              />
              <Form.Field
                label="club soda"
                name="clubSoda"
                control={Checkbox}
                checked={alcoholTypes.clubSoda}
                onChange={(e) =>
                  setAlcoholTypes({
                    ...alcoholTypes,
                    clubSoda: !alcoholTypes.clubSoda,
                  })
                }
                type="checkbox"
              />
            </Form.Group>
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  );
};

export default VenueDetailsForm;
