import React from "react";
import HomePresenter from "./HomePresenter";


const buttonOnClick = (e:any) => {
  console.log(e)
}

const LoginContainer = () => {
  return <HomePresenter onClick={buttonOnClick}/>;
};

export default LoginContainer;
