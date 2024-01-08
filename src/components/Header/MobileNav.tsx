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
    <div ref={ref}>
      <Button onClick={() => setOpen(!open)}>
        <Hamburger fill="white" />
      </Button>

      {open && (
        <MenuContainer>
          <NavLinks onNavigate={() => setOpen(false)} />
        </MenuContainer>
      )}
    </div>
  );
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px;

  background-color: ${colors.background};
  padding: 12px;
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
`;

const Button = styled.button`
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  color: white;
  border: none;
  cursor: pointer;
  height: 36px;
  width: 36px;

  display: none;
  background-color: transparent;

  @media (max-width: 648px) {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
`;

export default MobileNav;
