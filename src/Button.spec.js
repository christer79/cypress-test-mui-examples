import * as React from "react";
import { mount } from "@cypress/react";
import { Button } from "@material-ui/core";
describe("Buttons", () => {
  it("verify label", () => {
    const onClickStub = cy.stub().as("delete");

    mount(
      <div>
        <Button id="button-1" onClick={onClickStub}>
          Click me!
        </Button>
        <Button id="button-2" onClick={onClickStub}>
          Don&apos;t click me!
        </Button>
      </div>
    );
    cy.get("@delete").should("not.have.been.called");
    cy.get("button").contains("Click me!").click();
    cy.get("@delete").should("have.been.called");
    cy.get("#button-2").click();
  });
});
