import React from "react";
import styled from "styled-components";
import { getState } from "../StateProvider";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.color ? props.color : "blue")};
  width: ${props => (props.width ? props.width : "100px")};
  display: ${props =>
    props.visible === undefined || props.visible ? "block" : "none"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const ButtonList = () => {
  const [state] = getState();
  console.log("render in button list.");
  const { visible, color } = state;
  return (
    <div>
      <Button color={color} visible={visible}>
        Button1
      </Button>
      <Button color={color} visible={visible}>
        Button2
      </Button>
      <Button color={color} visible={visible}>
        Button3
      </Button>
      <Button color={color} visible={visible}>
        Button4
      </Button>
    </div>
  );
};

export default ButtonList;
