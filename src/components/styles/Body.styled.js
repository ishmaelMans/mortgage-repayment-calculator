import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    width: 100%;
  }
`;

const StyledBody = styled.div`
  border-radius: 25px;
  background-color: #fff;
  margin: 0 auto;
  max-width: 100%;
  width: 800px;
  min-height: 480px;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 0 30px ${({ theme }) => theme.color.slate300};

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    flex-direction: column;
    min-height: 900px;
    border-radius: 0;
    justify-content: column;
    min-width: 440px;
    overflow: visible;
  }
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  // padding: 0 20px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    min-width: 440px;
  }
`;

const StyledCalculatorContainer = styled.div`
  width: 400px;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  color: black;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    min-width: 440px;
    // padding: 0 10px;
  }
`;

const StyledResultContainer = styled.div`
  width: 400px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // max-width: 100%;
  background-color: ${({ theme }) => theme.color.slate900};
  border-bottom-left-radius: 70px;
  color: white;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    border-bottom-left-radius: 0;
    height: 1000px;
    min-width: 440px;
  }
`;

const StyledFirstSection = styled.div`
  color: ${({ theme }) => theme.color.slate900};
  width: 350px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 15px;
  // padding: 0 30px;

  p {
    font-size: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.color.slate900};

    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}px) {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;

    p {
      font-size: 16px;
      margin-top: 10px;
    }
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: 11px;
  margin-top: 7px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    margin-bottom: 15px;
  }
`;

const StyledSecondSection = styled.div`
  color: ${({ theme }) => theme.color.slate900};
  width: 350px;
  margin-top: 30px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 13px;
  }
`;
const StyledThirdSection = styled.div`
  color: ${({ theme }) => theme.color.slate900};
  width: 350px;
  margin-top: 20px;
  padding: 0 30px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

  label {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
const StyledFourthSection = styled.div`
  color: ${({ theme }) => theme.color.slate900};
  width: 350px;
  margin-top: 20px;
  padding: 0 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  label {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

const RadioSelection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  margin-bottom: 7px;

  label {
    width: 100%;
    font-weight: 700;
    border: 1px solid ${({ theme }) => theme.color.slate300};
    color: hsl(202, 55%, 16%);
    margin: 0;
    padding-left: 30px;
    padding: 10px 0;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
    }
  }

  input {
    border: 1px solid red;
    margin-left: 15px;
    // background-color: ${({ theme }) => theme.color.lime};

    &[type="radio"] {
      display: none;
    }
    &[type="radio"] + label {
      position: relative;
      padding-left: 40px;
      cursor: pointer;
    }
    &[type="radio"]:checked + label {
      border-color: ${({ theme }) => theme.color.lime};
      background-color: hsl(61, 70%, 90%);
    }
    &[type="radio"] + label::before {
      content: "";
      position: absolute;
      left: 15px;
      top: 11px;
      width: 12px;
      height: 12px;
      border: 1px solid hsl(202, 55%, 16%);
      border-radius: 50%;
    }
    &[type="radio"] + label::after {
      content: "";
      position: absolute;
      left: 18px;
      top: 14px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }

    &[type="radio"]:checked + label::before {
      background-color: #fff;
      border-color: ${({ theme }) => theme.color.lime};
    }
    &[type="radio"]:checked + label::after {
      background-color: ${({ theme }) => theme.color.lime};
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const InputContainer = styled.div`
  margin-top: 10px;
  position: relative;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-contents: center;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    width: 350px;
  }
`;

const LabelSign = styled.p`
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.slate100};
  ${({ customProp }) =>
    customProp &&
    css`
      background-color: ${({ theme }) => theme.color.lime};
      color: #000;
    `}
  ${({ errorProp }) =>
    errorProp &&
    css`
      background-color: ${({ theme }) => theme.color.red};
      color: #fff;
    `}
  transition: background-color 0.3s, color 0.3s;
  padding: 10px 14px;
  font-weight: 600;
`;

const LabelSignSection2 = styled.p`
  font-size: 14px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.color.slate100};
  ${({ customProp }) =>
    customProp &&
    css`
      background-color: ${({ theme }) => theme.color.lime};
      color: #000;
    `}
  ${({ errorProp }) =>
    errorProp &&
    css`
      background-color: ${({ theme }) => theme.color.red};
      color: #fff;
    `}

  transition: background-color 0.3s, color 0.3s;
  padding: 10px 14px;
  font-weight: 600;
`;

const Input = styled.input`
  pointer: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  transition: border-color 0.3s;
  overflow: hidden;
  outline: none;
  max-width: 100%;
  width: 100%;
  color: ${({ theme }) => theme.color.slate900};
  background: transparent;
  z-index: 10;
  margin-top: 10px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.slate500};
  border-radius: 5px;
  padding: 10px 50px;
  margin: 0;

  &:hover::-webkit-inner-spin-button,
  &:hover::-webkit-outter-spin-buttton {
    -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outter-spin-buttton {
    -webkit-appearance: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.lime};
  }
  &:focus + label {
    background-color: blue;
  }
  ${({ errorProp }) =>
    errorProp &&
    css`
      border-color: ${({ theme }) => theme.color.red};
    `}
`;
const InputSection2 = styled.input`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  transition: border-color 0.3s;
  outline: none;
  max-width: 100%;
  width: 100%;
  color: ${({ theme }) => theme.color.slate900};
  margin-top: 10px;
  position: relative;
  z-index: 10;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.slate500};
  border-radius: 5px;
  padding: 10px 10px;
  margin: 0;

  &:hover::-webkit-inner-spin-button,
  &:hover::-webkit-outter-spin-buttton {
    -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outter-spin-buttton {
    -webkit-appearance: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.lime};
  }
  ${({ errorProp }) =>
    errorProp &&
    css`
      border-color: ${({ theme }) => theme.color.red};
    `}

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    margin-bottom: 20px;
  }
`;

const StyledButton = styled.div`
  position: relative;
  outline: none;
  margin-top: 25px;
  margin-bottom: 25px;
  max-width: 100%;
  width: 350px;
  display: flex;
  justify-content: flex-start;

  &::before {
    position: absolute;
    content: "";
    width: 18px;
    height: 18px;
    background-image: url("./images/icon-calculator.svg");
    background-size: cover;
    background-position: center;
    left: 33px;
    top: 11px;
  }

  input[type="submit"] {
    color: ${({ theme }) => theme.color.slate900};
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    outline: none;
    border: none;
    padding: 12px 40px 12px 60px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.color.lime};

    &:hover {
      cursor: pointer;
      background-color: hsl(61, 70%, 60%);
      transition: background-color 0.3;
    }
  }
`;

export {
  StyledDiv,
  StyledBody,
  StyledCalculatorContainer,
  StyledResultContainer,
  Form,
  StyledFirstSection,
  StyledSecondSection,
  StyledThirdSection,
  StyledFourthSection,
  RadioSelection,
  InputContainer,
  Input,
  InputSection2,
  LabelSign,
  LabelSignSection2,
  StyledButton,
  StyledSpan,
};
