import { Link } from "react-router-dom";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <Title to="/">Mangfoldpsykologene</Title>
        <DesktopNav />
        <MobileNav />
      </Content>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color: #d2b48c;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  color: black;
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
  color: Black;
  text-decoration: none;
  font-size: 1.5rem;
`;

export default Header;
