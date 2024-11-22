import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-items: center;
  background: ${({ theme }) => theme.color.slate100};
  color: ${({ theme }) => (theme.color.isTrue ? theme.color.body : "gold")};

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    max-width: 420px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    background: #fff;
  }
`;

export default Container;
