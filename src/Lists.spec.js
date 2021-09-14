import * as React from "react";
import { mount } from "@cypress/react";
import {
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";

import WorkIcon from "@material-ui/icons/Work";
import ImageIcon from "@material-ui/icons/Image";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

describe("Buttons", () => {
  it("verify label", () => {
    mount(
      <dev>
        <List id="list-1">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
        <List id="list-2">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </dev>
    );
    cy.get("#list-1").find("li").its("length").should("eq", 3);
    cy.get("#list-2").find("li").should("have.length", 2);
    cy.get("#list-1").contains("Vacation");
  });
});
