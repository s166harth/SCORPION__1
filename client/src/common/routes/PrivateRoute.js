import React from "react";
import { Route, Redirect } from "react-router-dom";

const Authentication = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (currentUser ? Component : <Redirect to="/login" />)}
    />
  );
};

export default Authentication;
