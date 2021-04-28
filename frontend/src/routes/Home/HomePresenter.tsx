import React from "react";
import Button from "../../components/Button";


type homePresenterProps = {
  onClick:any
}
const LoginPresenter = (props:homePresenterProps) => {
  return (
    <div>
      <Button text={"login!"} onClick={props.onClick}/>
    </div>
  );
};

export default LoginPresenter;
