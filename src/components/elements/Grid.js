import React from "react";
import PropTypes from "prop-types";

import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

const Grid = ({ Header, children }) => {
  return (
    <StyledGrid>
      <h1>{Header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
};

Grid.propTypes = {
  header: PropTypes.string
};

export default Grid;
