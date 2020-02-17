import React, { Component } from "react";
import { Link } from "@reach/router";
import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from "../styles/StyledHeader";

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <div>
          <div className="header-content">
            <Link to="/">
              <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
              <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
            </Link>
          </div>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
