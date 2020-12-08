import React from "react";

const GoBackButton = (props) => {
  const goBack = () => {
    props.history.goBack();
  };
  return <button className="btn btn-dark" onClick={goBack}> Go back</button>;
};

export default GoBackButton;
