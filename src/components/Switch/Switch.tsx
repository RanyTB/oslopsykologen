import { useState } from "react";
import styled, { keyframes } from "styled-components";
import OmNadine from "../../pages/Om Meg/OmNadine";
import OmSadiya from "../../pages/Om Meg/OmSadiya";
import Nav from "react-bootstrap/Nav";

const Switch = () => {
  const [nadineActive, setNadineActive] = useState(false);
  const [sadiyaActive, setSadiyaActive] = useState(true);

  const handleSadiyaActive = () => {
    setSadiyaActive(true);
    setNadineActive(false);
  };
  const handleNadineActive = () => {
    setSadiyaActive(false);
    setNadineActive(true);
  };

  return (
    <>
      <TitleButtonContainer>
        <h2>Les mer om</h2>
        <StyledNav fill variant="tabs" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link onClick={handleSadiyaActive} eventKey="link-1">
              Sadiya
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleNadineActive} eventKey="link-2">
              Nadine
            </Nav.Link>
          </Nav.Item>
        </StyledNav>
      </TitleButtonContainer>
      <InfoContainer>
        {nadineActive && (
          <Info>
            <OmNadine />
          </Info>
        )}
        {sadiyaActive && (
          <Info1>
            <OmSadiya />
          </Info1>
        )}
      </InfoContainer>
    </>
  );
};

const TitleButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    width: calc(100%);
    text-align: center;
  }
`;

const StyledNav = styled(Nav)`
  margin: 1rem 0 1rem 0;
  border-bottom: 1px solid #dee2e6;

  .nav-item.show .nav-link,
  .nav-link.active {
    color: black;
    background-color: #d2b48c;
    border-color: #dee2e6 #dee2e6 #fff;
  }

  .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: black;
    padding: 0.5rem 1rem;
    font-weight: 500;
    font-size: 1.3rem;
  }

  .nav-link:hover {
    background-color: #d2b48c;
  }

  .nav-item {
    margin-bottom: -1px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn1 = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Info = styled.div`
  font-size: 18px;
  padding: 10px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  animation: ${fadeIn1} 1s forwards;
`;

const Info1 = styled.div`
  font-size: 18px;
  padding: 10px;
  transition: opacity 0.5s ease, transform 0.5s ease;
  animation: ${fadeIn} 1s forwards;
`;

export default Switch;
