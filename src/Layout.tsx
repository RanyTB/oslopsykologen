import { Outlet } from "react-router-dom";
import styled from "styled-components";
import useScrollToTop from "./hooks/useScrollToTop";

const Layout = () => {
  useScrollToTop();
  return (
    <MainContent>
      <Outlet />
    </MainContent>
  );
};

const MainContent = styled.main`
  padding: 16px;
  flex: 1;

  @media (min-width: 768px) {
    /* For tablets and larger screens */
  }

  @media (min-width: 1024px) {
    /* For desktop screens */
  }
`;

export default Layout;
