import heroImage from "../../assets/images/gruppeportrett.jpg";
import texts from "../../cms";
import TjenesteCard from "./TjenesteCard/TjenesteCard";
import GruppeTjenesteCard from "./GruppeTjenesteCard/GruppeTjenesteCard";
import SkriveTerapi from "./SkriveTerapi";
import Card from "../../components/Card";
import styled, { keyframes } from "styled-components";
import { breakpoints } from "../../constants";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";

const TjenesterPage = () => {
  const [groupTherapy, setGroupTherapy] = useState(false);
  const [therapy, setTherapy] = useState(true);
  const [writeTherapy, setWriteTherapy] = useState(false);

  const handleCheckedGroupTherapy = () => {
    setGroupTherapy(true);
    setTherapy(false);
    setWriteTherapy(false);
  };

  const handleCheckedTherapy = () => {
    setGroupTherapy(false);
    setTherapy(true);
    setWriteTherapy(false);
  };
  const handleCheckedWriteTherapy = () => {
    setGroupTherapy(false);
    setTherapy(false);
    setWriteTherapy(true);
  };

  return (
    <MethodSection>
      <h2>Hva slags tjenester vi tilbyr</h2>
      <TitleButtonContainer>
        <StyledNav fill variant="tabs" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link onClick={handleCheckedTherapy} eventKey="link-1">
              Terapitjenester
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleCheckedGroupTherapy} eventKey="link-2">
              Gruppeterapi
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={handleCheckedWriteTherapy} eventKey="link-3">
              Skriveterapi
            </Nav.Link>
          </Nav.Item>
        </StyledNav>
      </TitleButtonContainer>
      {therapy ? (
        <AnimationContainer>
          <MethodHeading>Terapitjenester</MethodHeading>
          <Separator />
          <SubMethodHeading>
            {" "}
            Integrativ tilnærming som kombinerer teknikker fra ulike
            terapiretninger, inkludert kognitiv terapi og emosjonsfokusert
            terapi
          </SubMethodHeading>
          <CardWrappers>
            {texts.tjenester.tjenester.map(
              ({ link, shortDescription, title, linkText }) => (
                <TjenesteCard
                  key={title}
                  title={title}
                  description={shortDescription}
                  linkTo={link}
                  linkText={linkText}
                />
              )
            )}
          </CardWrappers>
          <OrderSection>
            <Separator />
            <Image src={heroImage} alt="Image of mangfoldpsykologene" />
            <Card
              secondDescription=""
              target=""
              thirdDescription=""
              listItem1=""
              listItem2=""
              listItem3=""
              listHeading=""
              listHeading2=""
              title="Bestill konsultasjon hos oss"
              description="Vi legger stor vekt på å skape en trygg, empatisk og ikke-dømmende atmosfære i terapirommet."
              linkTo={"/bestill"}
              linkText={"Bestill konsultasjon"}
            />
          </OrderSection>
        </AnimationContainer>
      ) : (
        ""
      )}
      {groupTherapy ? (
        <AnimationContainer>
          <MethodHeading>Gruppeterapi</MethodHeading>
          <Separator />
          <CardWrappers>
            {texts.gruppeTerapi.gruppeTerapi.map(
              ({ link, shortDescription, title, linkText }) => (
                <GruppeTjenesteCard
                  key={title}
                  title={title}
                  description={shortDescription}
                  linkTo={link}
                  linkText={linkText}
                />
              )
            )}
          </CardWrappers>
          <OrderSection>
            <Separator />
            <Image src={heroImage} alt="Image of mangfoldpsykologene" />
            <Card
              secondDescription=""
              target=""
              thirdDescription=""
              listItem1=""
              listItem2=""
              listItem3=""
              listHeading=""
              listHeading2=""
              title="Bestill Gruppetime hos oss"
              description="Vi legger stor vekt på å skape en trygg, empatisk og ikke-dømmende atmosfære i terapirommet."
              linkTo={"/kontakt"}
              linkText={"Bestill Gruppetime"}
            />
          </OrderSection>
        </AnimationContainer>
      ) : (
        ""
      )}
      {writeTherapy && (
        <AnimationContainer>
          <MethodHeading>Skriveterapi</MethodHeading>
          <Separator />
          <SkriveTerapi />
        </AnimationContainer>
      )}
    </MethodSection>
  );
};

const MethodSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
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

const StyledNav = styled(Nav)`
  margin: 3rem 0 1rem 0;
  border-bottom: 1px solid #dee2e6;

  .nav-item.show .nav-link,
  .nav-link.active {
    color: black;
    background-color: #d2b48c;
    border-color: #dee2e6 #dee2e6 #fff;
  }

  .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: black;
    padding: 0.5rem 1rem;
    font-weight: 500;
    font-size: 1.3rem;
  }

  .nav-link:hover {
    background-color: #d2b48c;
  }

  .nav-item {
    margin-bottom: -1px;
  }
`;

const CardWrappers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 86rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const MethodHeading = styled.h2`
  font-weight: 500;
  width: calc(100%);
  font-size: 2.2rem;
  max-width: 50rem;
  margin: 2rem 0 0;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2rem;
    margin: 1.5rem 0 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    margin: 1rem 0 0;
  }
`;

const TitleButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  (max-width: ${breakpoints.tablet}) {
    ul {
      margin-top: 0;
    }
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
  font-size: 1.3rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const Image = styled.img`
  width: 12%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  margin: 4rem 0 2rem;

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
  margin-top: 4rem;

  h2 {
    font-style: normal;
    font-size: 45px;
    font-weight: normal;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 35px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 25px;
    }
  }

  p {
    font-size: 1.5rem;
    max-width: 45rem;

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

const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  transition: opacity 0.5s ease, transform 0.5s ease;
  animation: ${fadeIn} 1s forwards;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 2rem;
    padding-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export default TjenesterPage;
