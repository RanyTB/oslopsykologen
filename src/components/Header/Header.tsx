import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <Title to="/">Oslopsykologen</Title>
        <Nav>
          <StyledNavLink to="/">Hjem</StyledNavLink>
          <StyledNavLink to="/om-meg">Om meg</StyledNavLink>
          <StyledNavLink to="/tjenester">Tjenester</StyledNavLink>
          <StyledNavLink to="/priser">Bestill</StyledNavLink>
        </Nav>
      </Content>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 1280px;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

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

export default Header;
