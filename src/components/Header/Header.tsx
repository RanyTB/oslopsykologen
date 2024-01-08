import { Link } from "react-router-dom";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { colors } from "../../constants";

const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <Title to="/">Oslopsykologen</Title>
        <DesktopNav />
        <MobileNav />
      </Content>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  background-color: ${colors.background};
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

export default Header;
