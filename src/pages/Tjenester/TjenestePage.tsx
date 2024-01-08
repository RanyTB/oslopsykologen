import { useParams } from "react-router-dom";
import tjenester from "../../cms/tjenester.json";
import Page from "../../components/Page";

const TjenestePage = () => {
  const { tjenestetype } = useParams();

  const tjeneste = tjenester.find((tjeneste) => tjeneste.link === tjenestetype);

  if (!tjeneste) {
    return <div>Not found</div>;
  }

  return (
    <Page title={tjeneste.title}>
      <p>{tjeneste.content}</p>
    </Page>
  );
};

export default TjenestePage;
