import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/AboutMe/AboutMe";
import Nav from "./component/Nav/Nav";
import ViewLayout from "./layout/ViewLayout";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import MyCvPage from "./Pages/MyCvPage/MyCvPage";

function App() {
  var dateVariable = Date().toLocaleString();

  return (
    <div className="App">
      <Routes>
        <Route element={<ViewLayout />}>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/mycv" element={<MyCvPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
