import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./Firebase-Config/AuthContext";
import Nav from "./Nav";

const ProtectedNav = () => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Nav />;
};

export default ProtectedNav;
