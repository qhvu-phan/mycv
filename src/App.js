import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ViewLayout from "./layout/ViewLayout";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import MyCvPage from "./Pages/MyCvPage/MyCvPage";
import PageNotFound from "./component/PageNotFound/PageNoteFound";

function App() {
  var dateVariable = Date().toLocaleString();

  return (
    <div className="App">
      <Routes>
        <Route element={<ViewLayout />}>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/mycv" element={<MyCvPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
