import React from "react";
import "./style.css";
interface Props {
  error: boolean;
}

const ErrorMessage = ({ error }: Props) => {
  return error ? <div className="error">Error datos formulario</div> : <></>;
};

export default ErrorMessage;
