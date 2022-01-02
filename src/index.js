
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Crypto from "./components/Crypto/Crypto"

ReactDOM.render(
 <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} index/>
        <Route path="/crypto/:id" element={<Crypto />} />
        <Route path="*" element={ <PrivateRoute/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
