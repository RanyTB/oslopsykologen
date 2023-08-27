import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../constants";

type Props = {
  to: string;
  children: ReactNode;
};

const LinkButton = ({ to, children }: Props) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 16px 0px;
  text-decoration: none;
  background-color: ${colors.link};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.linkHover};
  }
`;

export default LinkButton;
