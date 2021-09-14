import * as React from "react";
import { mount } from "@cypress/react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
} from "@material-ui/core";
describe("Select", () => {
  it("can select optiosn", () => {
    const Form = () => {
      const names = [
        "Oliver Hansen",
        "Van Henry",
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Miriam Wagner",
        "Bradley Wilkerson",
        "Virginia Andrews",
        "Kelly Snyder",
      ];

      const [personName, setPersonName] = React.useState(names[2]);
      const handleSelectChange = (event) => {
        setPersonName(event.target.value);
      };

      return (
        <FormControl>
          <InputLabel id="select-name-label">Name</InputLabel>
          <Select
            labelId="select-name-label"
            id="select-name"
            value={personName}
            onChange={handleSelectChange}
            input={<Input />}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    };
    mount(<Form />);
    cy.get("#select-name").contains("April Tucker");
    cy.get("#select-name").click();
    cy.get(`[aria-labelledby="select-name-label"]`)
      .contains("Virginia Andrews")
      .click();
    cy.get("#select-name").contains("Virginia Andrews");
  });
});
