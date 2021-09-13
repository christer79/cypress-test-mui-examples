import "./App.css";
import * as React from "react";
import { Typography, Button } from "@material-ui/core";

function App() {
  const callback = React.useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <div className="App">
      <Typography variant="h1">Cypress testing examples</Typography>
      <Typography varian="h3"> Buttons</Typography>
      <Button onClick={callback}>Click me!</Button>
    </div>
  );
}

export default App;
