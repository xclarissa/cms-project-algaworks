import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client"; 
import './core/imports.css';
import Home from "./app/views/Home.view";
import Contact from "./app/views/Contact.view";
import NotFound404 from "./app/views/NotFound404.view";
import UserView from "./app/views/UserView.view";
import CalcView from "./app/views/CalcView.view";
import GlobalStyles from "./core/globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contato' element={<Contact />} />
          <Route path='/usuario/:userId' element={<UserView />} />
          <Route path='/calc/:a/:b' element={<CalcView />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);
