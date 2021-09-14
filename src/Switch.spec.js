import * as React from "react";
import { mount } from "@cypress/react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

describe("Buttons", () => {
  it("verify label", () => {
    function SwitchLabels() {
      const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      return (
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                id="one"
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
              />
            }
            label="Secondary"
          />
          <FormControlLabel
            control={
              <Switch
                id="two"
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Primary"
          />
          <FormControlLabel
            control={<Switch id="three" />}
            label="Uncontrolled"
          />
          <FormControlLabel
            disabled
            control={<Switch id="four" />}
            label="Disabled"
          />
          <FormControlLabel
            disabled
            control={<Switch id="five" checked />}
            label="Disabled"
          />
        </FormGroup>
      );
    }

    mount(<SwitchLabels />);
    cy.get("#five").should("be.disabled");
    cy.get("#four").should("not.be.checked");
    cy.get(`[name="checkedA"]`).should("be.checked");
    cy.get(`[name="checkedA"]`).uncheck();
  });
});
