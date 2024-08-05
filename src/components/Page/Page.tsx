import styled from "styled-components";

type Props = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

const Page = ({ title, subtitle, children }: Props) => {
  return (
    <>
      <TitleWrapper>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TitleWrapper>
      {children}
    </>
  );
};

const TitleWrapper = styled.div`
  margin-top: 3rem;
  width: calc(100%);
`;

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  max-width: 50rem;
  font-style: italic;
  margin-bottom: 2rem;
`;

export default Page;
