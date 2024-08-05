import Card from "../../components/Card";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import portrett from "../../assets/images/sadiya2fav.jpg";

const OmSadiya = () => {
  return (
    <>
      <MainSection>
        <MainHeading>Sadiya</MainHeading>
        <Image src={portrett} />
        <Separator />
        <Card
          title=""
          description="Jeg er autorisert psykolog med flere års erfaring fra spesialisthelsetjenesten. Jeg er for tiden under spesialisering i klinisk voksenpsykologi. De siste årene har jeg jobbet i poliklinikk, døgnavdeling og på psykoseenhet. Min erfaring spenner over et bredt spekter av psykiske lidelser og utfordringer, og jeg har jobbet med både voksne, unge og familier. Jeg har hatt gleden av å hjelpe pasienter fra ulike livsløp og kulturelle bakgrunner med forskjellige problemstillinger."
          secondDescription=""
          thirdDescription=""
          listItem1=""
          listItem2=""
          listItem3=""
          listHeading=""
          listHeading2=""
          linkTo={""}
          linkText={""}
          target=""
        />
      </MainSection>
      <MainSection>
        <Card
          title=""
          description="Gjennom min karriere har jeg arbeidet mye med lidelser som angst, depresjon, traumer, tilknytningsvansker, personlighetsforstyrrelser, somatisering og ADHD. Jeg har også erfaring innen flerkulturell psykologi, og er spesielt interessert i utfordringene som oppstår ved migrasjon og blant expats."
          linkTo={""}
          linkText={""}
          target=""
          secondDescription=""
          thirdDescription=""
          listItem1=""
          listItem2=""
          listItem3=""
          listHeading=""
          listHeading2=""
        />
      </MainSection>
      <QuoteSection>
        <Quote>
          Jeg tror på å etablere en sterk terapeutisk relasjon, da jeg mener
          dette er avgjørende for å fremme endring og vekst hos deg.
        </Quote>
      </QuoteSection>
      <MainSection>
        <Card
          title=""
          description="Jeg har bred erfaring med utredninger og er opptatt av å forstå dine symptomer på en helhetlig og respektfull måte. Som psykolog er jeg kjent for å være empatisk og lyttende. Jeg benytter en psykodynamisk tilnærming og tilpasser terapien etter dine unike behov. Jeg anvender også kognitive intervensjoner, psykoedukasjon og emosjonsfokusert terapi. Hos meg er ingen problemstillinger for små eller for store."
          linkTo={""}
          linkText={""}
          target=""
          secondDescription=""
          thirdDescription=""
          listItem1=""
          listItem2=""
          listItem3=""
          listHeading=""
          listHeading2=""
        />
      </MainSection>
      <MainSection>
        <Separator />
        <Subheading>Hva kan du forvente hos meg</Subheading>
        <Card
          title=""
          description="Jeg legger stor vekt på å etablere en sterk terapeutisk relasjon, da jeg mener dette er avgjørende for å fremme endring og vekst hos mine deg. I terapirommet skaper jeg en trygg, empatisk og ikke-dømmende atmosfære. Jeg tilbyr også EMDR-behandling ved behov."
          linkTo={""}
          linkText={""}
          target=""
          secondDescription=""
          thirdDescription=""
          listItem1=""
          listItem2=""
          listItem3=""
          listHeading=""
          listHeading2=""
        />
        <Card
          title=""
          secondDescription="For å møte dine ulike behov, tilbyr jeg terapi på kontoret, per telefon eller via video. Jeg tilbyr terapi på norsk, engelsk og somali."
          linkTo={""}
          linkText={""}
          target=""
          description=""
          thirdDescription=""
          listItem1=""
          listItem2=""
          listItem3=""
          listHeading=""
          listHeading2=""
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
    font-size: 2.1rem;
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
export default OmSadiya;
