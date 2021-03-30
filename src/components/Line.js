import React from "react";
//styling
import styled from "styled-components";
const Line = ({ width, color }) => {
  return <LineComponent width={width} color={color}></LineComponent>;
};

const LineComponent = styled.div`
  width: ${({ width }) => width};
  height: 1px;
  background-color: ${({ color }) => color};
  margin: 1rem 0;
`;

export default Line;
