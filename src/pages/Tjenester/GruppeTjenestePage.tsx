import { useParams } from "react-router-dom";
import texts from "../../cms";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import Card from "../../components/Card";
import { Accordion } from "react-bootstrap";

const GruppeTjenestePage = () => {
  const { gruppeTerapiType } = useParams();

  const gruppeTjeneste = texts.gruppeTerapi?.gruppeTerapi?.find(
    (gruppeTerapi) => gruppeTerapi.link === gruppeTerapiType
  );

  console.log(gruppeTjeneste?.keywordheading);
  if (!gruppeTjeneste) {
    return <div>{texts.common.pageNotFound}</div>;
  }

  console.log(gruppeTjeneste);

  return (
    <MainSection>
      <MainHeading>{gruppeTjeneste.title}</MainHeading>
      <Separator />
      <Card
        description={gruppeTjeneste.content}
        secondDescription=""
        linkTo={""}
        linkText={""}
        target=""
      />
      <Card
        description={gruppeTjeneste.content2}
        secondDescription=""
        linkTo={""}
        linkText={""}
        target=""
      />
      <Separator />
      <Card
        description={gruppeTjeneste.content3}
        secondDescription=""
        linkTo={""}
        linkText={""}
        target=""
      />
      <Separator />
      <Card description={gruppeTjeneste.content4} />
      {gruppeTjeneste.subheading ? (
        <Subheading>{gruppeTjeneste.subheading}</Subheading>
      ) : (
        ""
      )}
      <AccordionContainer>
        {gruppeTjeneste.keywordheading && (
          <>
            <Accordion className="fixed-width-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordion-header">
                  {gruppeTjeneste.keywordheading}
                </Accordion.Header>
                <Accordion.Body className="accordion-body">
                  <AccordionList>
                    {gruppeTjeneste.keywords &&
                      Object.entries(gruppeTjeneste.keywords).map(
                        ([key, value]) => <li key={key}>{value}</li>
                      )}
                  </AccordionList>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        )}
        {gruppeTjeneste.keywordheading2 && (
          <>
            <AccordionWrapper>
              <Accordion className="fixed-width-accordion">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {gruppeTjeneste.keywordheading2}
                  </Accordion.Header>
                  <Accordion.Body>
                    <AccordionList>
                      {gruppeTjeneste.keywords2 &&
                        Object.entries(gruppeTjeneste.keywords2).map(
                          ([key, value]) => <li key={key}>{value}</li>
                        )}
                    </AccordionList>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </AccordionWrapper>
          </>
        )}
        {gruppeTjeneste.keywordheading3 && (
          <>
            <AccordionWrapper>
              <Accordion className="fixed-width-accordion">
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {gruppeTjeneste.keywordheading3}
                  </Accordion.Header>
                  <Accordion.Body>
                    <AccordionList>
                      {gruppeTjeneste.keywords3 &&
                        Object.entries(gruppeTjeneste.keywords3).map(
                          ([key, value]) => <li key={key}>{value}</li>
                        )}
                    </AccordionList>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </AccordionWrapper>
          </>
        )}
        {gruppeTjeneste.keywordheading4 && (
          <>
            <Accordion className="fixed-width-accordion">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {gruppeTjeneste.keywordheading4}
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionList>
                    {gruppeTjeneste.keywords4 &&
                      Object.entries(gruppeTjeneste.keywords4).map(
                        ([key, value]) => <li key={key}>{value}</li>
                      )}
                  </AccordionList>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        )}
        {gruppeTjeneste.keywordheading5 && (
          <>
            <Accordion className="fixed-width-accordion">
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {gruppeTjeneste.keywordheading5}
                </Accordion.Header>
                <Accordion.Body>
                  <AccordionList>
                    {gruppeTjeneste.keywords5 &&
                      Object.entries(gruppeTjeneste.keywords5).map(
                        ([key, value]) => <li key={key}>{value}</li>
                      )}
                  </AccordionList>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        )}
      </AccordionContainer>
      <Separator />

      <Card description={gruppeTjeneste.infoPris} />
      <Separator />
      <Card linkTo={"/kontakt"} linkText={"Bestill time"} />
    </MainSection>
  );
};

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

const MainHeading = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
    word-break: break-word;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
    word-break: break-word;
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

export default GruppeTjenestePage;
