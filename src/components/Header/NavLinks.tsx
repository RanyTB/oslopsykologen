import { NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = {
  onNavigate?: () => void;
};

const NavLinks = ({ onNavigate }: Props) => {
  return (
    <>
      <StyledNavLink to="/" onClick={onNavigate}>
        Hjem
      </StyledNavLink>
      <StyledNavLink to="/om-meg" onClick={onNavigate}>
        Om meg
      </StyledNavLink>
      <StyledNavLink to="/tjenester" onClick={onNavigate}>
        Tjenester
      </StyledNavLink>
      <StyledNavLink to="/priser" onClick={onNavigate}>
        Bestill
      </StyledNavLink>
    </>
  );
};

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: #d2395c;
  }
`;
export default NavLinks;
