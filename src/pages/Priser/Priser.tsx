import styled from "styled-components";
import SwitchBestilling from "../../components/Switch/SwitchBestilling";

const Priser = () => {
  return (
    <>
      <SwitchContainer>
        <SwitchBestilling />
      </SwitchContainer>
    </>
  );
};

const SwitchContainer = styled.div`
  margin-top: 2rem;
`;

export default Priser;
