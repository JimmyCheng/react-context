import React from "react";
import styled from "styled-components";
import { getState } from "../StateProvider";

import "../styles.css";
import img from "../resource/pic_trulli.jpg";

const Img = styled.img`
  width: ${props => (props.width ? props.width : "500px")};
  height: ${props => (props.height ? props.height : "333px")};
  display: ${props =>
    props.visible === undefined || props.visible ? "block" : "none"};
`;

const Image = () => {
  const [state] = getState();
  const { width, height, visible } = state;
  console.log("render in image.");
  return (
    <Img
      src={img}
      width={`${width}px`}
      height={`${height}px`}
      visible={visible}
    />
  );
};

export default Image;
