import * as React from "react";
import { mount } from "@cypress/react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

describe("Buttons", () => {
  it("verify label", () => {
    function FormDialog() {
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      return (
        <div>
          <Button
            id="open-dialog"
            variant="outlined"
            color="primary"
            onClick={handleClickOpen}
          >
            Open form dialog
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button id="close" onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button id="subscribe" onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }

    mount(<FormDialog />);
    cy.get("#open-dialog").click();
    cy.get(`[aria-labelledby="form-dialog-title"]`).should("be.visible");
    cy.get("#name").type("test@test.com");
    cy.get("#subscribe").click();
  });
});
