import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";

const App = () => {
  console.log("Preloaded State ----", window.__PRELOADED_STATE__);
  return (
    <BrowserRouter>
      {routes()}
    </BrowserRouter>
  )
}

ReactDOM.hydrate(<App />, document.getElementById("root"));