import React from "react";
import "./style.css";


type buttonProps = {
  text:string;
  onClick:any;
}
const Button = ( props: buttonProps ) => {
  return (
    <div className="button" onClick={props.onClick}>
      {props.text}
    </div>
  );
};

export default Button;
