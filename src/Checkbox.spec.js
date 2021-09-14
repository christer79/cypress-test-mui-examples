import * as React from "react";
import { mount } from "@cypress/react";
import {
  FormGroup,
  FormLabel,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";
describe("Buttons", () => {
  it("verify label", () => {
    const CheckForm = () => {
      const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
      });
      const { gilad, jason, antoine } = state;
      const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      return (
        <FormControl required error={error} component="fieldset">
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={gilad}
                  onChange={handleChange}
                  name="gilad"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={jason}
                  onChange={handleChange}
                  name="jason"
                  id="check-jason"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={handleChange}
                  name="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl>
      );
    };
    mount(<CheckForm />);
    cy.get(`[name="antoine"]`).check();
    cy.get("#check-jason").check();
    cy.get("#check-jason").should("be.checked");
    cy.get("#check-jason").uncheck();
    cy.get("#check-jason").should("not.be.checked");
    cy.get(`[name="gilad"]`).check();
  });
});
