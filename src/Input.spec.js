import * as React from "react";
import { mount } from "@cypress/react";
import { TextField, Input } from "@material-ui/core";
describe("Buttons", () => {
  it("verify label", () => {
    mount(
      <div>
        <TextField id="text-field-1" label="Outlined" variant="outlined" />
        <Input id="input-1" />
      </div>
    );
    cy.get("#text-field-1").should("be.empty");
    cy.get("#text-field-1").type("Apa");
    cy.get("#text-field-1").should("have.value", "Apa");
    cy.get("#input-1").should("be.empty");
    cy.get("#input-1").type("Apa");
    cy.get("#input-1").should("have.value", "Apa");
  });
});
