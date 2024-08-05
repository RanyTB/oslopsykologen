import { useParams } from "react-router-dom";
import texts from "../../cms";
import styled from "styled-components";
import { breakpoints } from "../../constants";
import Card from "../../components/Card";

const TjenestePage = () => {
  const { tjenestetype } = useParams();

  const tjeneste = texts.tjenester.tjenester.find(
    (tjeneste) => tjeneste.link === tjenestetype
  );

  if (!tjeneste) {
    return <div>{texts.common.pageNotFound}</div>;
  }

  return (
    <MainSection>
      <MainHeading>{tjeneste.title}</MainHeading>
      <Separator />
      <Card
        title=""
        description={tjeneste.content}
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
      <Card
        title=""
        description={tjeneste.content2 ? tjeneste.content2 : ""}
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
      <Separator />
      <Card
        title=""
        description={tjeneste.content3 ? tjeneste.content3 : ""}
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
      {tjeneste.subheading ? (
        <Subheading>{tjeneste.subheading}</Subheading>
      ) : (
        ""
      )}
      <ListWrapper>
        {tjeneste.keywords &&
          Object.entries(tjeneste.keywords).map(([key, value]) => (
            <>
              <KeywordItem key={key}>{value}</KeywordItem>
            </>
          ))}
        {tjeneste.keywords && (
          <>
            <Separator />
          </>
        )}
      </ListWrapper>

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
        linkTo={"/bestill"}
        linkText={"Bestill time"}
        target=""
      />
    </MainSection>
  );
};

const Subheading = styled.h2`
  font-size: 1.5rem !important;
  font-weight: 400;
  margin: 2rem 0 3rem;

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

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.2rem;
    }
  }
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  max-width: 38rem;
  padding: 0;
  list-style-type: none;
  margin-bottom: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const KeywordItem = styled.li`
  background-color: #d2b48c;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #333;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
    padding: 0.75rem 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 0.5rem 0.75rem;
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

export default TjenestePage;
