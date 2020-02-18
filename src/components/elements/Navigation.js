import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import { StyledNavigation } from "../styles/StyledNavigation";

const Navigation = ({ movie }) => (
  <div>
    <StyledNavigation>
      <div className="navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{movie}</p>
      </div>
    </StyledNavigation>
  </div>
);

Navigation.propTypes = {
  movie: PropTypes.string
};

export default Navigation;
