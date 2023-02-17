import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client"; 
import './core/imports.css';
import Home from "./app/views/Home.view"; 
import NotFound404 from "./app/views/NotFound404.view"; 
import GlobalStyles from "./core/globalStyles"; 
import EditorsListView from "./app/views/EditorsList.view";
import PostCreateView from "./app/views/PostCreate.view";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editores" element={<EditorsListView />} />
          <Route path="/posts/criar" element={<PostCreateView />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);
