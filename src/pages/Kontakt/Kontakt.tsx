import { useState } from "react";
import GenerellSkjema from "./Skjema/index";
import GruppeSkjema from "./Skjema/SkjemaGruppe";
import SkjemaSadiya from "./Skjema/SkjemaSadiya";
import SkjemaNadine from "./Skjema/SkjemaNadine";
import Nav from "react-bootstrap/Nav";
import { Section, StyledNav } from "./styled";

const Kontakt = () => {
  const [gruppeTerapi, setGruppeTerapi] = useState(false);
  const [kontaktSadiya, setKontaktSadiya] = useState(false);
  const [kontaktNadine, setKontaktNadine] = useState(false);
  const [kontaktGenerell, setKontaktGenerell] = useState(true);

  const handleGruppeTerapiActive = () => {
    setGruppeTerapi(true);
    setKontaktSadiya(false);
    setKontaktNadine(false);
    setKontaktGenerell(false);
  };

  const handleKontaktNadineActive = () => {
    setGruppeTerapi(false);
    setKontaktSadiya(false);
    setKontaktNadine(true);
    setKontaktGenerell(false);
  };

  const handleKontaktSadiyaActive = () => {
    setGruppeTerapi(false);
    setKontaktSadiya(true);
    setKontaktNadine(false);
    setKontaktGenerell(false);
  };

  const handleKontaktGenerellActive = () => {
    setGruppeTerapi(false);
    setKontaktSadiya(false);
    setKontaktNadine(false);
    setKontaktGenerell(true);
  };

  return (
    <>
      <Section>
        <h1>Kontakt</h1>
        <StyledNav fill variant="tabs" defaultActiveKey="link-4">
          <Nav.Item>
            <Nav.Link onClick={handleKontaktGenerellActive} eventKey="link-4">
              Generelt
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleGruppeTerapiActive} eventKey="link-3">
              Gruppeterapi
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleKontaktSadiyaActive} eventKey="link-1">
              Sadiya
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleKontaktNadineActive} eventKey="link-2">
              Nadine
            </Nav.Link>
          </Nav.Item>
        </StyledNav>
        {kontaktGenerell && <GenerellSkjema />}
        {gruppeTerapi && <GruppeSkjema />}
        {kontaktSadiya && <SkjemaSadiya />}
        {kontaktNadine && <SkjemaNadine />}
      </Section>
    </>
  );
};

export default Kontakt;
