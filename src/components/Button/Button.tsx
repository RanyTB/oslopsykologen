import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  linkTo?: string;
  href?: string;
};

const Button = ({ children }: Props) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  background-color: red;
  color: white;
`;

export default Button;
