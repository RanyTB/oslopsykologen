import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
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
  const [isSuccess, setIsSuccess] = useState(false);

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

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(formData);

    if (isSuccess) {
      // sendFormData(formData);
      reset();
    }
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
        {gruppeTerapi && (
          <GruppeSkjema
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            control={control}
            errors={errors}
            Controller={Controller}
          />
        )}
        {kontaktSadiya && (
          <SkjemaSadiya
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            control={control}
            errors={errors}
            Controller={Controller}
          />
        )}
        {kontaktNadine && (
          <SkjemaNadine
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            control={control}
            errors={errors}
            Controller={Controller}
          />
        )}
      </Section>
    </>
  );
};

export default Kontakt;
