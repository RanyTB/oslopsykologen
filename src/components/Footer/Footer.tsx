import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { breakpoints } from "../../constants";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <StyledHr />
      <FooterContainer>
        <FooterContent>
          <FooterContentContainer>
            <FooterTitle href="#">Mangfoldpsykologene</FooterTitle>
            <FooterText>
              Erfarne voksenpsykologer med fleksibel tilnærming og
              spesialisering innen angst, depresjon, traumer og relasjonelle
              vansker. Tilbyr også coaching for artister og kreative bransjer.
            </FooterText>
          </FooterContentContainer>
          <FooterContentContainer>
            <FooterText>Kontakt</FooterText>
            <FooterUl>
              <FooterLi>
                <FooterLink href="mailto:oslopsykologen@gmail.com">
                  <StyledIcons icon={faEnvelope} />{" "}
                  mangfoldpsykologene@gmail.com
                </FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink
                  href="https://www.instagram.com/mangfoldpsykologene?igsh=ZnVnZnp0YTh2NTR1"
                  target="_blank"
                >
                  <StyledIcons icon={faInstagram} /> @Mangfoldpsykologene
                </FooterLink>
              </FooterLi>
              <FooterLi>
                <FooterLink
                  href="https://www.tiktok.com/@mangfoldpsykologe?_t=8oaSvRN1u89&_r=1"
                  target="_blank"
                >
                  <StyledIcons icon={faTiktok} /> @Mangfoldpsykologene
                </FooterLink>
              </FooterLi>
            </FooterUl>
          </FooterContentContainer>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0;
`;

const FooterContainer = styled.footer`
  background-color: #d2b48c;
  padding: 36px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
  }
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;
  padding: 0 16px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FooterContentContainer = styled.div`
  max-width: 500px;
`;

const FooterTitle = styled.a`
  display: block;
  text-decoration: none;
  margin-bottom: 24px;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.3rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const FooterText = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  color: black;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const FooterUl = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    text-decoration: none;
    color: black;
  }
`;

const FooterLi = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin: 8px 0px;
  color: black;
  text-decoration: none;
  position: relative;
  padding: 5px 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background: #333;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform: scale(0.9);
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1);
  }

  svg {
    vertical-align: middle;
    margin-right: 8px;
    transition: transform 0.3s ease, fill 0.3s ease;
  }

  &:hover svg {
    transform: rotate(20deg);
    fill: #333;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`;

const StyledIcons = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  margin-right: 0.33rem;
`;

export default Footer;
