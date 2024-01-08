import styled from "styled-components";
import Hamburger from "../../assets/hamburger.svg?react";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLinks";
import { colors } from "../../constants";

const MobileNav = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container ref={ref}>
      <Button onClick={() => setOpen(!open)}>
        <Hamburger fill="white" />
      </Button>
      {open && (
        <MenuContainer>
          <NavLinks onNavigate={() => setOpen(false)} />
        </MenuContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const MenuContainer = styled.div`
  background-color: ${colors.background};
  padding: 12px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  position: absolute;
  top: 24px;
  right: 0px;
`;

const Button = styled.button`
  color: white;
  border: none;
  cursor: pointer;
  height: 24px;
  width: 24px;

  display: none;
  background-color: transparent;

  @media (max-width: 648px) {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

export default MobileNav;
