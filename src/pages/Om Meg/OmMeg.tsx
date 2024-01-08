import Page from "../../components/Page";
import texts from "../../cms";

const OmMeg = () => {
  return (
    <Page title="Psykolog Nadine Rose A. Richani">
      {texts.omMeg.paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </Page>
  );
};

export default OmMeg;
