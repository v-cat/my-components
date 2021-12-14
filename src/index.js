import React from "react";
import ReactDOM from "react-dom";
import Toolbar from "./components/Toolbar";
import TooltipButton from "./components/TooltipButton";
class App extends React.Component {
  render() {
    // Every react component has a render method.
    return (
      // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
      <div>
        Hello World
        <Toolbar>Toolbar</Toolbar>
        <TooltipButton>TooltipButton</TooltipButton>
        <TooltipButton tip="hi" icon="edit" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
