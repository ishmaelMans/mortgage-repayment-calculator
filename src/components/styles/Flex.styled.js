import styled from "styled-components";

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & > div {
    flex: 1;
  }
`;

export default Flex;
