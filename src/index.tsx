import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "components/Widget/Widget";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>
);
