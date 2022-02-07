import React from 'react';
import './index.css';
import App from './App';
import Shop from './Component/pages/Shop/Shop'


import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/buy" element={<Shop />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

