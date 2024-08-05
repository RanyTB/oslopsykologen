import styled from "styled-components";
import Switch from "../../components/Switch/Switch";

const OmMeg = () => {
  return (
    <>
      <SwitchContainer>
        <Switch />
      </SwitchContainer>
    </>
  );
};

const SwitchContainer = styled.div`
  margin-top: 2rem;
`;

export default OmMeg;
