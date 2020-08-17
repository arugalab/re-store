import React from "react";

const ErrorIndicator = ({ errorMessage = "Something bad happened!" }) => {
  return <h2>{errorMessage}</h2>;
};

export default ErrorIndicator;
