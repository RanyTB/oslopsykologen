import Card from "../../components/Card";
import Page from "../../components/Page";

const Hjem = () => {
  return (
    <Page title="Din psykolog i Oslo">
      <Card
        title="Om meg"
        description={"En psykolog fra Oslo med erfaring fra.."}
        linkTo={"/om-meg"}
        linkText={"Les mer om meg"}
      />
      <Card
        title="Tjenester"
        description={"Vi tilbyr terapi med ulike metodikker."}
        linkTo={"/tjenester"}
        linkText={"Se hvilke tjenester vi tilbyr"}
      />
    </Page>
  );
};

export default Hjem;
