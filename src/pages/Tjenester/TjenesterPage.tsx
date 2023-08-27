import Page from "../../components/Page";
import tjenester from "../../cms/tjenester.json";
import TjenesteCard from "../../components/TjenesteCard/TjenesteCard";
import styled from "styled-components";

const TjenesterPage = () => {
  return (
    <Page title="Tjenester">
      <Container>
        {tjenester.map(({ link, shortDescription, title }) => (
          <TjenesteCard
            title={title}
            description={shortDescription}
            linkTo={link}
            linkSuffix={title.toLowerCase()}
          />
        ))}
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
