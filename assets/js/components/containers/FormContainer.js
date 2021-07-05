import React from "react";
import CustomButton from "../layouts/CustomButton";

const FormContainer = (props) => {
  const handleFormSubmit = () => {
    // submit logic goes here
  };
  const handleClearForm = () => {
    // clear form logic goes here
  };
  return (
    <form className="container" onSubmit={handleFormSubmit} {...props}>
      <h5>{props.name}</h5>

      <CustomButton onClick={handleClearForm}>Submit</CustomButton>
    </form>
  );
};
export default FormContainer;
