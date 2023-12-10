import React from "react";
import Nav from "../component/Nav/Nav";
import { Outlet } from "react-router-dom";

const ViewLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default ViewLayout;
