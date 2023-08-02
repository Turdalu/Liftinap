import React from "react";
import { styled } from "styled-components";

function Buttun (props) {
    // console.log(props);
  return <ButStyle onClick={props.onClick}>ADD</ButStyle>;
}

export default Buttun;

const ButStyle = styled.button`
  width: 100px;
  border-radius:10px;
  height: 50px;
  background-color: blue;
  color:azure;
  font-size:30px;

`
