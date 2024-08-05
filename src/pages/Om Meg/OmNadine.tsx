import Card from "../../components/Card";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import portrett from "../../assets/images/nadine-portrett.jpg";

const OmNadine = () => {
  return (
    <>
      <MainSection>
        <MainHeading>Nadine Rose A. Richani</MainHeading>
        <Image src={portrett} />
        <Separator />
        <Card
          description="Jeg har min psykologutdanning fra Det Syddanske Universitetet i Danmark, og jeg spesialiserer meg innenfor voksenpsykologi. Jeg har flere års erfaring som psykolog. Jeg har jobbet i spesialisthelsetjenesten med både barn, unge og voksne."
          secondDescription=""
          linkTo={""}
          linkText={""}
          target=""
        />
      </MainSection>
      <MainSection>
        <Card
          description="Gjennom mitt arbeid som psykolog har jeg opparbeidet meg en erfaring med et mangfold av problemstillinger, og har erfaring med en rekke psykiske lidelser og utfordringer. Som angst, depresjon, relasjonelle vansker, traumer, tilknytningsvansker og mye mer. Jeg har jobbet med personer fra forskjellige kulturelle bakgrunner, og har erfaring med minoritetspsykologi."
          linkTo={""}
          linkText={""}
          target=""
        />
      </MainSection>
      <QuoteSection>
        <Quote>
          Jeg tror at den terapeutiske relasjonen er grunnleggende for å hjelpe
          deg til å oppleve endring og vekst
        </Quote>
      </QuoteSection>
      <MainSection>
        <Card
          description="Jeg legger derfor stor vekt på å skape en trygg, empatisk og ikke-dømmende atmosfære i terapirommet. Jeg tar også sikte på å tilpasse behandlingen til ditt unike behov og ønsker."
          linkTo={""}
          linkText={""}
          target=""
        />
      </MainSection>
      <MainSection>
        <Separator />
        <Subheading>Hva kan du forvente hos meg</Subheading>
        <Card
          description="Jeg har en fleksibel tilnærming til terapi. Jeg ønsker å tilpasse meg dine behov og vil samarbeide med deg for å finne en tilnærming som passer deg best. Derfor bruker jeg en integrativ tilnærming som kombinerer teknikker fra ulike terapiretninger, inkludert kognitiv terapi og emosjonsfokusert terapi."
          linkTo={""}
          linkText={""}
          target=""
        />
        <Card
          secondDescription="Timene foregår via video, telefon eller personlig oppmøte. Jeg tilbyr terapi i følgende språk: spansk, arabisk (libanesisk), norsk og engelsk. Jeg tilbyr individualterapi og er tilgjengelig på kveldstid."
          linkTo={""}
          linkText={""}
          target=""
        />
      </MainSection>
      <MainSection>
        <Separator />
        <Subheading>Tjeneste innenfor prestasjonspsykologi</Subheading>
        <Card
          description="Jeg tilbyr også en egen tjeneste innenfor prestasjonspsykologi, hvor jeg tilbyr coaching/terapi til artister eller andre innenfor den kreative bransjen. Se artisthry.no for mer informasjon"
          linkTo={""}
          linkText={""}
          target=""
        />
      </MainSection>
    </>
  );
};

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 1.5rem;
    padding: 0 0.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
    padding: 0 0.25rem;
  }

  h2 {
    font-style: normal;
    text-align: center;
    font-size: 2rem;
    font-weight: normal;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 35px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 25px;
    }
  }

  p {
    font-size: 1.3rem;
    max-width: 45rem;
    line-height: 1.5;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.4rem;
      max-width: 100%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }
`;

const MainHeading = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const QuoteSection = styled.section`
  border: 0.8rem solid #d2b48c;
  border-radius: 0.33rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 4rem auto;
  padding: 2rem;
  max-width: 80%;

  @media (max-width: ${breakpoints.desktop}) {
    margin: 2rem auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 2rem auto;
    max-width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 2rem auto;
    max-width: 95%;
    padding: 1rem;
  }
`;

const Quote = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 50rem;
  font-style: italic;
  padding: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.8rem;
    padding: 3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    padding: 2rem;
  }
`;

const Separator = styled.div`
  width: 49rem;
  border-bottom: 0.2rem solid #d2b48c;
  border-radius: 11px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin: 1.5rem 0;
  }
`;

const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  max-width: 50rem;
  font-style: italic;
  margin: 2rem 0 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.8rem;
    margin: 1.5rem 0 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
  }
`;

const Image = styled.img`
  width: 12%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 0 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 20%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 40%;
  }
`;
export default OmNadine;
