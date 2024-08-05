import styled from "styled-components";
import { LinkButton } from "../Button";

type Props = {
  title: string;
  description: string;
  secondDescription: string;
  thirdDescription: string;
  listHeading: string;
  listHeading2: string;
  listItem1: string;
  listItem2: string;
  listItem3: string;
  linkTo: string;
  linkText: string;
  target: string;
};

const Card = ({
  title,
  description,
  secondDescription,
  thirdDescription,
  listItem1,
  listItem2,
  listItem3,
  listHeading,
  listHeading2,
  linkTo,
  linkText,
  target,
}: Props) => {
  return (
    <Container>
      <div>
        {title ? <Title>{title}</Title> : ""}
        {description ? <Description>{description}</Description> : ""}
        {secondDescription ? (
          <SecondDescription>{secondDescription}</SecondDescription>
        ) : (
          ""
        )}
        {thirdDescription ? (
          <ThirdDescription>{thirdDescription}</ThirdDescription>
        ) : (
          ""
        )}
        {listHeading && (
          <List>
            {listHeading ? <h3>{listHeading}</h3> : ""}

            {listItem1 ? <ListItem> {listItem1}</ListItem> : ""}
            {listItem2 ? <ListItem> {listItem2}</ListItem> : ""}
            {listItem2 ? <ListItem> {listItem3}</ListItem> : ""}

            {listHeading2 ? <ListSubNote>{listHeading2}</ListSubNote> : ""}
          </List>
        )}
      </div>
      <div>
        {linkTo ? (
          <LinkButton target={target} to={linkTo}>
            {linkText}
          </LinkButton>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const SecondDescription = styled.p`
  margin-top: 4rem;
  font-size: 1rem;
  font-style: italic;
`;

const ThirdDescription = styled.p`
  margin-top: 2rem;
  font-size: 0.8rem;
  font-style: italic;
`;

const List = styled.ul`
  margin-top: 3rem;
  margin-bottom: 0.5rem;

  h2 {
    margin-top: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const ListItem = styled.li`
  li {
    font-size: 1rem;
    font-style: italic;
  }
`;

const ListSubNote = styled.p`
  margin-top: 2rem;
  font-style: italic;
`;

export default Card;
