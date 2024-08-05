import styled from "styled-components";
import { breakpoints } from "../../constants";
import Card from "../../components/Card";
import { Accordion } from "react-bootstrap";

const SkriveTerapi = () => {
  return (
    <MainSection>
      <Card
        description="Mange finner skriveterapi like effektivt som samtaleterapi, da det gir mulighet til å utforske tanker og følelser i eget tempo"
        secondDescription="Vi kan kommunisere gjennom e-post, der du sender en tekst, og vi svarer med en tekst tilbake"
        title=""
        thirdDescription=""
        listItem1=""
        listItem2=""
        listItem3=""
        listHeading=""
        listHeading2=""
        target=""
        linkTo=""
        linkText={""}
      />
      <AccordionContainer>
        <AccordionWrapper>
          {" "}
          <Accordion className="fixed-width-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-header">
                Skriveterapi kan være et godt alternativ hvis:
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <AccordionList>
                  <li>Du vil skrive hvor og når du vil</li>
                  <li>Du ønsker rask hjelp</li>
                  <li>Du ønsker en trygg måte å utrykke deg på</li>
                  <li>
                    Du har vanskeligheter med å møte til time på grunn av angst,
                    utmattelse eller andre plager
                  </li>
                  <li>Du ønsker konkret og tydelige råd</li>
                </AccordionList>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>{" "}
        </AccordionWrapper>
        <AccordionWrapper>
          <Accordion className="fixed-width-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordion-header">
                Vi tilbyr:
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <AccordionList>
                  <li>En trygg og støttende samtalepartner</li>
                  <li>Svar innen 48 timer</li>
                  <li>Forståelse og refleksjon rundt dine problemstillinger</li>
                  <li>Konkrete råd og verktøy du kan bruke videre</li>
                </AccordionList>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </AccordionWrapper>
      </AccordionContainer>
      <Card
        description=""
        title=""
        thirdDescription=""
        listItem1=""
        listItem2=""
        listItem3=""
        listHeading=""
        listHeading2=""
        target=""
        linkTo=""
        linkText={""}
        secondDescription="Maks 1 A4 side per mail - 550kr, opptil 2 ganger i uken"
      />
      <Separator />
      <Subheading>Vi kommuniserer via Crypho</Subheading>
      <OrderedList>
        <Subheading>Slik gjør du:</Subheading>
        <li>Opprett en bruker i CRYPHO</li>
        <li>Klikk på "+" tegnet, add contacts</li>
        <li>Trykk "send"</li>
      </OrderedList>
      <Card
        description=""
        secondDescription=""
        title=""
        thirdDescription=""
        listItem1=""
        listItem2=""
        listItem3=""
        listHeading=""
        listHeading2=""
        linkText="Opprett bruker"
        linkTo="https://app.crypho.com/signup"
        target="_blank"
      />
      <Card
        description=""
        title=""
        thirdDescription=""
        listItem1=""
        listItem2=""
        listItem3=""
        listHeading=""
        listHeading2=""
        secondDescription="Vent til du får svar før du sender sensitive opplysninger"
        linkText=""
        linkTo=""
        target=""
      />
      <hr />
      <Card
        description="Vi benytter Crypho, en norskutviklet samtaleplatform for sikker kommunikasjon. Crypho kan brukes i nettleser, som app på mobilen, eller som desktop-program på laptopen"
        secondDescription="For deg som klient, er Crypho gratis å bruke. Les eventuelt mer om Crypho"
        linkText="Les mer"
        linkTo="https://www.crypho.no/faq/?fbclid=PAZXh0bgNhZW0CMTEAAaZ5XrtK03SQAVYGyBhRFhtTdbn31v3EyyEh4_f7oRMS6w60J_URbas93MY_aem_fw_SaegsG1VrWWeBHU2bGg"
        target="_blank"
        title=""
        thirdDescription=""
        listItem1=""
        listItem2=""
        listItem3=""
        listHeading=""
        listHeading2=""
      />
      <Card
        title=""
        description=""
        linkText=""
        linkTo=""
        target=""
        thirdDescription=""
        listItem1=""
        listItem2=""
        listItem3=""
        listHeading=""
        listHeading2=""
        secondDescription="Vanlig e-post er ikke kryptert, og det bør ikke sendes sensitive  personopplysninger"
      />
      <Separator />
      <Subheading>Dette passer ikke for:</Subheading>
      <Card
        title=""
        secondDescription=""
        linkText=""
        linkTo=""
        target=""
        thirdDescription=""
        listItem1=""
        listItem2=""
        listItem3=""
        listHeading=""
        listHeading2=""
        description="Alvorlige psykiske lidelser som krever intensiv behandling eller innleggelse, samt akutte krisesituasjoner som selvmordsfare"
      />
      <Separator />
      <Subheading>Lurer du på noe?</Subheading>
      <Card
        title=""
        secondDescription=""
        description=""
        target=""
        thirdDescription=""
        listItem1=""
        listItem2=""
        listItem3=""
        listHeading=""
        listHeading2=""
        linkTo={"/kontakt"}
        linkText={"Ta kontakt"}
      />
    </MainSection>
  );
};

const OrderedList = styled.ol`
  list-style-type: decimal;
  text-align: center
  padding-left: 1.5rem;
  color: #333;
  font-size: 1rem;
  

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
    text-align: left;
    font-size: 1.2rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 1rem;
    font-size: 0.9rem;

    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding-left: 0.5rem;
    font-size: 0.8rem;

    h3 {
      font-size: 1.2rem;
    }
  }
`;

const AccordionContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem 2rem;
`;

const AccordionWrapper = styled.div`
  @media (max-width: ${breakpoints.tablet} {
    width: calc(50%)
  });
`;

const AccordionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 30rem;
 padding-left: 20px;
  margin: 10px 0;
  list-style: none; 

  li {
     position: relative;
     margin-bottom: 5px;
     color: #333;
     font-size: 16px;
     padding-left: 20px; 
     text-align: left;
  }

  li::before {
  content: '•'; 
  position: absolute;
  left: 0;
  color: #d2b48c; 
  font-size: 20px; 
`;

const Subheading = styled.h2`
  font-size: 1.5rem !important;
  font-weight: 400;
  margin: 0 0 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.8rem;
    margin: 1.5rem 0 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
    font-size: 1.3rem;
    max-width: 45rem;
    line-height: 1.5;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1.4rem;
      max-width: 100%;
    }
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

export default SkriveTerapi;
