import styled from "styled-components";

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Page = ({ title, children }: Props) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 64px;
`;

export default Page;
