import React from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.header`
  height: 60px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0 20px;

  .navbar-content {
    height: 100%;
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavBar: React.FC = ({ children }) => (
  <NavBarContainer>
    <div className="navbar-content">{children}</div>
  </NavBarContainer>
);

export default NavBar;
