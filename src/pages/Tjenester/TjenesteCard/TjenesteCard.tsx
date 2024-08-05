import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
};

const TjenesteCard = ({ title, description, linkTo }: Props) => {
  return (
    <CardLink to={linkTo}>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </CardLink>
  );
};

const CardLink = styled(Link)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  text-align: left;
  text-decoration: none;
  max-width: 30rem;
  color: black;
  overflow: hidden;
  padding: 2rem 2rem;
  border-radius: 11px;
  border: 0.2rem solid #d2b48c;
  display: flex;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px;
    border-color: #e0e0e0;
    background: #fafafa;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  &:hover h2,
  &:hover p {
    color: #333;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 16px;
`;

export default TjenesteCard;
