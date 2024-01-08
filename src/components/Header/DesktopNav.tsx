import styled from "styled-components";
import NavLinks from "./NavLinks";
import { breakpoint } from "./constants";

const DesktopNav = () => {
  return (
    <Nav>
      <NavLinks />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoint}) {
    display: none;
  }
`;

export default DesktopNav;
