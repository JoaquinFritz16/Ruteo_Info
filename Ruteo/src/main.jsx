import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App"
import Region from "./components/Region";
import SubRegion from "./components/SubRegion";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>} />
      <Route path="/region" element={<Region></Region>} />
      <Route path="/subregion" element={<SubRegion></SubRegion>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);