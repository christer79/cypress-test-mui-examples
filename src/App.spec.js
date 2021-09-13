import * as React from "react";
import { mount } from "@cypress/react";
import App from "./App";

describe("Buttons", () => {
  it("verify label", () => {
    mount(<App />);
    cy.get("button").contains("Click me!").click();
  });
});
