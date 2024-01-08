import Page from "../../components/Page";
import texts from "../../cms";
import TjenesteCard from "./TjenesteCard/TjenesteCard";
import styled from "styled-components";

const TjenesterPage = () => {
  return (
    <Page title="Tjenester">
      <Container>
        {texts.tjenester.tjenester.map(
          ({ link, shortDescription, title, linkText }) => (
            <TjenesteCard
              title={title}
              description={shortDescription}
              linkTo={link}
              linkText={linkText}
            />
          )
        )}
      </Container>
    </Page>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
`;

export default TjenesterPage;
