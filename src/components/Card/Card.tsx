import styled from "styled-components";
import { LinkButton } from "../Button";

type Props = {
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
};

const Card = ({ title, description, linkTo, linkText }: Props) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
      <div>
        <LinkButton to={linkTo}>{linkText}</LinkButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 16px;
`;

export default Card;
