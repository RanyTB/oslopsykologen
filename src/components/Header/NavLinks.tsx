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
      <StyledNavLink to="/om-oss" onClick={onNavigate}>
        Om oss
      </StyledNavLink>
      <StyledNavLink to="/tjenester" onClick={onNavigate}>
        Tjenester
      </StyledNavLink>
      <StyledNavLink to="/bestill" onClick={onNavigate}>
        Bestill
      </StyledNavLink>
      <StyledNavLink to="/kontakt" onClick={onNavigate}>
        Kontakt
      </StyledNavLink>
    </>
  );
};

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  opacity: 0.7;
  margin: 0 1rem;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;

  position: relative;

  &:hover {
    opacity: 1;
    color: black;

    &::after {
      width: 100%;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease-in-out;
  }

  &.active {
    opacity: 1;
    font-weight: bolder;

    &::after {
      width: 100%;
    }
  }
`;

export default NavLinks;
