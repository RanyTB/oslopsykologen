import styled from "styled-components";
import { colors } from "../../constants";

const Footer = () => {
  return (
    <Container>
      <Content>
        <ContentContainer>
          <Title>Oslopsykologen</Title>
          <Text>
            Erfaren voksenpsykolog med fleksibel tilnærming og spesialisering
            innen angst, depresjon, traumer og relasjonelle vansker. Tilbyr også
            coaching for artister og kreative bransjer.
          </Text>
        </ContentContainer>
        <ContentContainer>
          <Text>Ikke nøl med å ta kontakt dersom du har spørsmål:</Text>
          <Link href="mailTo:oslopsykologen@gmail.com">
            oslopsykologen@gmail.com
          </Link>
          <Link href="tel:004799418174">+47 994 18 174</Link>
        </ContentContainer>
      </Content>
    </Container>
  );
};

const Container = styled.footer`
  background-color: #333;
  color: white;
  padding: 36px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 1280px;
  gap: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled.div`
  max-width: 500px;
`;

const Title = styled.a`
  display: block;
  text-decoration: none;
  margin-bottom: 24px;
  font-size: 1.5rem;
`;

const Link = styled.a`
  display: block;
  margin: 8px 0px;
  color: ${colors.link};

  &:hover {
    color: ${colors.linkHover};
  }
`;

const Text = styled.p`
  font-size: 16px;
`;

export default Footer;
