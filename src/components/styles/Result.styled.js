import styled from "styled-components";

const ResultShownHere = styled.div`
  // visibility: hidden;
  // transform: translateY(120px);
  width: 350px;
  padding: 0 20px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    margin-top: 20px;
  }

  p {
    text-align: center;
    font-size: 13px;
    line-height: 1.3;
    margin-top: 15px;
    color: ${({ theme }) => theme.color.slate300};
  }

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    transform: translateY(0);

    max-width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-items: center;
  }
`;
const YourResult = styled.div`
  transform: translateY(-40px);

  margin-top: 40px;
  width: 350px;
  height: 400px;
  max-width: 100%;
  // padding: 0 30px;
  // display: flex;
  // align-items: flex-start;
  // justify-content: space-evenly;
  flex-direction: column;
  h4 {
    margin-top: 20px;
  }

  p {
    font-size: 13px;
    line-height: 1.3;
    margin-top: 15px;
    color: ${({ theme }) => theme.color.slate300};
  }

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    border-bottom-left-radius: 0;
    max-width: 390px;
    max-height: 700px;
    padding: 0 20px;
  }
`;
const PaymentContainer = styled.div`
  background-color: ${({ theme }) => theme.color.slate1000};
  width: 350px;
  height: 235px;
  margin-top: 25px;
  border-radius: 10px;
  border-top: 3px solid ${({ theme }) => theme.color.lime};
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 280px;
    max-width: 100%;

    h1 {
      color: ${({ theme }) => theme.color.lime};
      font-size: 40px;
      border-bottom: 1px solid ${({ theme }) => theme.color.slate700};
      padding-bottom: 40px;
      width: 100%;
      margin-top: 10px;
    }

    h4 {
      margin-top: 5px;
    }
  }

  p:nth-child(1) {
    margin: 0;
  }

  p {
    font-size: 12px;
    line-height: 1.3;
    margin-top: 15px;
    color: ${({ theme }) => theme.color.slate300};
  }
`;

export { ResultShownHere, YourResult, PaymentContainer };
