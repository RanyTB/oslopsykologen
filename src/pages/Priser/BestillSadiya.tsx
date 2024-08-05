import Card from "../../components/Card";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import heroImage from "../../assets/images/sadiya2fav.jpg";

const BestillSadiya = () => {
  return (
    <MethodSection>
      <OrderSection>
        <MainHeading>Sadiya</MainHeading>
        <Image src={heroImage} alt="Image of Sadiya" />
        <Separator />
        <Card
          title=""
          description="Jeg tror på å etablere en sterk terapeutisk relasjon, da jeg mener dette er avgjørende for å fremme endring og vekst hos deg."
          listHeading="Priser:"
          listItem1="Individual terapi 45 min - 1550kr"
          listItem2="Individualterapi 60 min - 1700kr"
          listItem3="Dobbelttime (90 min) - 2500kr"
          listHeading2="Vi tilbyr også online konsultasjon - Studentrabatt: Vi har 30% studentrabatt mot fremvisning av studentkort."
          thirdDescription="Vi gjør oppmerksom på at vi har 48 timers avbestillingsfrist før timens oppstart. Timer som ikke møtes til, eller avbestilles etter dette tidspunktet, vil faktureres i sin helhet."
          linkTo={"https://www.ledigpsykolog.no/sadiya-hamsa-mahamed?"}
          linkText={"Bestill konsultasjon"}
          target="_blank"
          secondDescription=""
        />
        <Card
          title=""
          description=""
          secondDescription=""
          thirdDescription=""
          listItem1=""
          listItem2=""
          listItem3=""
          listHeading=""
          listHeading2=""
          target=""
          linkTo={"/kontakt"}
          linkText={"Bestill gruppetime"}
        />
      </OrderSection>
    </MethodSection>
  );
};

const MethodSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-bottom: 4rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 2rem;
    padding-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const MainHeading = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2rem;
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

const OrderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;

  h2 {
    font-style: normal;
    font-size: 2.2rem;
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

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.2rem;
      max-width: 100%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1rem;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
  }
`;

export default BestillSadiya;
