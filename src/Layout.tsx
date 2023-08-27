import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <MainContent>
      <Outlet />
    </MainContent>
  );
};

const MainContent = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
  flex: 1;

  @media (min-width: 768px) {
    /* For tablets and larger screens */
    padding: 32px;
  }

  @media (min-width: 1024px) {
    /* For desktop screens */
    padding: 48px;
  }
`;

export default Layout;
