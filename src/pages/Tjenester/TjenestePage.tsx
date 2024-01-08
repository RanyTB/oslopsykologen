import { useParams } from "react-router-dom";
import texts from "../../cms";
import Page from "../../components/Page";
import Markdown from "react-markdown";

const TjenestePage = () => {
  const { tjenestetype } = useParams();

  const tjeneste = texts.tjenester.tjenester.find(
    (tjeneste) => tjeneste.link === tjenestetype
  );

  if (!tjeneste) {
    return <div>{texts.common.pageNotFound}</div>;
  }

  return (
    <Page title={tjeneste.title}>
      <Markdown>{tjeneste.content}</Markdown>
    </Page>
  );
};

export default TjenestePage;
