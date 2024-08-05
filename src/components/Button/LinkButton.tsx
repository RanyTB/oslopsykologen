import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkColors = {
  link: "#D2B48C",
  linkHover: "#C1A375",
};

type Props = {
  to: string;
  target: string;
  children: ReactNode;
};

const LinkButton = ({ to, target, children }: Props) => {
  return (
    <StyledLink target={target} to={to}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 16px 0;
  text-decoration: none;
  background-color: ${LinkColors.link};
  color: black;
  padding: 0.9rem 4rem;
  border: none;
  border-radius: 5px;
  font-size: 1.05rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    background-color 0.5s ease-in-out;

  &:hover {
    background-color: ${LinkColors.linkHover};
    transform: translateY(-2px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default LinkButton;
