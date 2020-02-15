import React from "react";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

const Grid = ({ Header, children }) => {
  return (
    <StyledGrid>
      <h1>{Header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
};

export default Grid;
