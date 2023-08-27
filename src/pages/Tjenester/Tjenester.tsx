import Page from "../../components/Page";
import tjenester from "../../cms/tjenester.json";
import TjenesteCard from "../../components/TjenesteCard/TjenesteCard";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import TjenestePage from "./TjenestePage";
import TjenesterPage from "./TjenesterPage";

const Tjenester = () => {
  return (
    <Routes>
      <Route path="/" element={<TjenesterPage />} />
      <Route path=":tjenestetype" element={<TjenestePage />} />
    </Routes>
  );

  return (
    <Page title="Tjenester">
      <Routes></Routes>
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
      <Routes></Routes>
    </Page>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 64px;
`;

export default Tjenester;
