import { useState } from "react";
import GenerellSkjema from "./Skjema/index";
import GruppeSkjema from "./Skjema/SkjemaGruppe";
import Nav from "react-bootstrap/Nav";
import { Section, StyledNav } from "./styled";

const Kontakt = () => {
  const [gruppeTerapi, setGruppeTerapi] = useState(false);
  const [kontaktGenerell, setKontaktGenerell] = useState(true);

  const handleGruppeTerapiActive = () => {
    setGruppeTerapi(true);
    setKontaktGenerell(false);
  };

  const handleKontaktGenerellActive = () => {
    setGruppeTerapi(false);

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
        </StyledNav>
        {kontaktGenerell && <GenerellSkjema />}
        {gruppeTerapi && <GruppeSkjema />}
      </Section>
    </>
  );
};

export default Kontakt;
