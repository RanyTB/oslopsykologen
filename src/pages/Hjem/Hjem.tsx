import Card from "../../components/Card";
import Page from "../../components/Page";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../constants";
import heroImage from "../../assets/images/gruppeportrett.jpg";
import consultationImage from "../../assets/images/kontor2.jpg";
import { Link } from "react-router-dom";
import heroBanner from "../../assets/images/gruppebilde1.png";

const Hjem = () => {
  return (
    <>
      <Section>
        <Page
          title="Mangfoldpsykologene"
          subtitle="En trygg, empatisk og tilpasset terapitjeneste for din vekst og endring"
        >
          <CardWrapper>
            <Card
              title="Bestill time"
              description={"Ønsker du en konsultasjon?"}
              secondDescription=""
              thirdDescription=""
              listItem1=""
              listItem2=""
              listItem3=""
              listHeading=""
              listHeading2=""
              target=""
              linkTo={"/bestill"}
              linkText={"Bestill time"}
            />
            <Card
              title="Behandlinger"
              description={"Vi tilbyr terapi med ulike metoder"}
              secondDescription=""
              thirdDescription=""
              listItem1=""
              listItem2=""
              listItem3=""
              listHeading=""
              listHeading2=""
              target=""
              linkTo={"/tjenester"}
              linkText={"Utforsk behandlinger"}
            />
          </CardWrapper>
        </Page>
      </Section>
      <AboutSection>
        <Image2 src={heroImage} alt="Image of mangfoldpsykologene" />
        <ContentWrapper>
          <Card
            title="Hvem er vi?"
            description="Vi er to psykologer som brenner for psykisk helse og mangfold. Gjennom vårt arbeid er vi opptatt av å skape et trygt rom for deg, uansett bakgrunn, kjønn og identitet"
            secondDescription=""
            thirdDescription=""
            listItem1=""
            listItem2=""
            listItem3=""
            listHeading=""
            listHeading2=""
            target=""
            linkTo={"/om-oss"}
            linkText={"Om oss"}
          />
        </ContentWrapper>
      </AboutSection>
      <QuoteSection>
        <Quote>
          Vi tror at den terapeutiske relasjonen er grunnleggende for å hjelpe
          deg til å oppleve endring og vekst
        </Quote>
      </QuoteSection>
      <BookingSection>
        <ContentWrapper>
          <Card
            title="Bestill konsultasjon"
            description="Vi tilbyr terapi og støtte for deg som opplever mild til moderate psykiske vansker. Vårt mål er å hjelpe deg med å forbedre livskvaliteten din gjennom økt forståelse av deg selv og dine relasjoner."
            secondDescription=""
            thirdDescription=""
            listHeading="Vi kan dessverre ikke ta imot personer med: "
            listItem1="Alvorlige psykiske lidelser som krever intensiv behandling eller innleggelse"
            listItem2="Akutte krisesituasjoner som selvmordsfare eller alvorlige traumer "
            listItem3="Rusmiddelavhengighet som hovedproblem"
            listHeading2="For de som har behov for hjelp med alvorlige psykiske vansker, anbefaler vi å kontakte offentlige helsetjenester eller spesialiserte institusjoner som kan gi den nødvendige støtten og behandlingen. Hvis du er usikker på om våre tjenester passer for deg, er du velkommen til å ta kontakt med oss for en uforpliktende samtale.  "
            linkTo={"/bestill"}
            linkText={"Bestill konsultasjon "}
            target=""
          />
        </ContentWrapper>
        <Image src={consultationImage} alt="Image of Psykolog Richani" />
      </BookingSection>
      <MethodSection>
        <MethodHeading>Terapi med ulike metoder</MethodHeading>
        <Separator />
        <SubMethodHeading>
          Integrativ tilnærming som kombinerer teknikker fra ulike
          terapiretninger, inkludert kognitiv terapi og emosjonsfokusert terapi
        </SubMethodHeading>
        <CardWrappers>
          <CardLink to={"/tjenester/emdr-behandling"}>
            <Card
              title="EMDR-behandling"
              description="EMDR-behandling er en terapeutisk metode som hjelper med å bearbeide og frigjøre negative følelser og symptomer knyttet til traumatiske opplevelser"
              secondDescription=""
              thirdDescription=""
              listItem1=""
              listItem2=""
              listItem3=""
              listHeading=""
              listHeading2=""
              target=""
              linkTo=""
              linkText=""
            />
          </CardLink>
          <CardLink to={"/tjenester/kognetiv-terapi"}>
            <Card
              title="Kognitiv terapi"
              description="Kognitiv terapi er en behandlingsmetode som fokuserer på å identifisere og endre negative tankemønstre for å redusere symptomer på psykiske utfordringer som depresjon, angstlidelser, fobier, PTSD og forbedre selvfølelsen"
              secondDescription=""
              thirdDescription=""
              listItem1=""
              listItem2=""
              listItem3=""
              listHeading=""
              listHeading2=""
              target=""
              linkTo=""
              linkText=""
            />
          </CardLink>
          <CardLink to={"/tjenester/metakognetiv-terapi"}>
            <Card
              title="Metakognitiv terapi"
              description="Metakognitiv terapi (MCT) er en effektiv behandlingsmetode for å hjelpe deg med angst og depresjon med å redusere overtenking og symptomer"
              secondDescription=""
              thirdDescription=""
              listItem1=""
              listItem2=""
              listItem3=""
              listHeading=""
              listHeading2=""
              target=""
              linkTo=""
              linkText=""
            />
          </CardLink>
          <CardLink to={"/tjenester/emosjonsfokusert-terapi"}>
            <Card
              title="Emosjonsfokusert terapi"
              description="Emosjonsfokusert terapi (EFT) tar utgangspunkt i at psykiske problemer oppstår når vi mister kontakten med våre grunnleggende følelser og behov. Vi lærer gjennom livet hvordan vi skal håndtere følelser, og noen av oss kan oppleve visse følelser som vanskeligere å mestre."
              secondDescription=""
              thirdDescription=""
              listItem1=""
              listItem2=""
              listItem3=""
              listHeading=""
              listHeading2=""
              target=""
              linkTo=""
              linkText=""
            />
          </CardLink>
        </CardWrappers>
      </MethodSection>
    </>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  background: url(${heroBanner}) no-repeat center center / cover fixed;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: -16px;
  padding: 6rem;
  height: 110vh;
  align-items: center;

  h1,
  p {
    transition: opacity 0.5s ease, transform 0.5s ease;
    animation: ${fadeIn} 1s forwards;
  }

  h2 {
    max-width: 30rem;
    font-size: 1.7rem;
    transition: opacity 0.5s ease, transform 0.5s ease;
    animation: ${fadeIn} 1s forwards;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 4rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    background-position: left center;

    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
    gap: 1rem;

    h1 {
      font-size: 2.1rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    background-position: left top;
    padding: 1rem;

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

const AboutSection = styled.section`
  background-color: #f7f7f7;
  border: 0.2rem solid #d2b48c;
  border-radius: 11px;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 1rem;

  h2 {
    font-style: normal;
    font-size: 45px;
    font-weight: normal;
  }

  p {
    font-size: 1.2rem;
    max-width: 45rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;

    h2 {
      font-size: 35px;
    }

    p {
      font-size: 1rem;
      max-width: 100%;
    }
  }
`;

const BookingSection = styled.section`
  border: 0.2rem solid #d2b48c;
  border-radius: 11px;
  background-color: #f7f7f7;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 4rem;

  h2 {
    font-style: normal;
    font-size: 45px;
    font-weight: normal;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 45rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    padding: 1rem;
    gap: 1rem;

    h2 {
      font-size: 35px;
    }

    p {
      font-size: 1rem;
      max-width: 100%;
    }
  }
`;

const QuoteSection = styled.section`
  border: 0.8rem solid #d2b48c;
  border-radius: 0.33rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1rem;
    margin-top: 2rem;
  }
`;

const Quote = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 38rem;
  font-style: italic;
  margin: 2rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const MethodHeading = styled.h2`
  font-weight: 500;
  width: calc(100%);
  font-size: 2.5rem;
  max-width: 50rem;
  margin: 2rem 0 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const Separator = styled.div`
  width: 49rem;
  border-bottom: 0.2rem solid #d2b48c;
  border-radius: 11px;
  margin: 1rem 0;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

const SubMethodHeading = styled.h3`
  font-weight: 400;
  width: calc(100%);
  font-size: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const MethodSection = styled.section`
  border: 0.8rem solid #d2b48c;
  border-radius: 0.33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 4rem;
  padding-bottom: 4rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2rem;
    margin-top: 2rem;
  }
`;

const CardWrappers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 86rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardLink = styled(Link)`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  text-align: left;
  text-decoration: none;
  max-width: 30rem;
  color: black;
  overflow: hidden;
  padding: 2rem;
  border-radius: 11px;
  border: 0.2rem solid #d2b48c;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 6px 12px;
    border-color: #e0e0e0;
    background: #fafafa;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    transition: color 0.3s ease;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  &:hover h2,
  &:hover p {
    color: #333;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
    padding: 1.5rem;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1rem;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const Image = styled.img`
  width: 35%;
  border-radius: 0 8px 8px 0;
  aspect-ratio: 7 / 5;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`;

const Image2 = styled.img`
  width: 35%;
  border-radius: 8px 0 0 8px;
  aspect-ratio: 5 / 5;
  object-fit: cover;
  margin-right: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
    margin-right: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export default Hjem;
