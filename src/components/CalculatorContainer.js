import { useContext } from "react";
import { UserContext } from "./Body";
import { StyleSheetManager } from "styled-components";

import {
  StyledDiv,
  StyledCalculatorContainer,
  StyledFirstSection,
  StyledSecondSection,
  StyledThirdSection,
  StyledFourthSection,
  Form,
  RadioSelection,
  InputContainer,
  Input,
  InputSection2,
  LabelSign,
  LabelSignSection2,
  StyledButton,
  StyledSpan,
} from "./styles/Body.styled";

const CalculatorContainer = () => {
  const shouldForwardProp = (prop) =>
    prop !== "customProp" && prop !== "errorProp";

  const {
    state,
    isValue,
    isChecked,
    clearAll,
    changeFocusBg,
    setChangFocusBg,
    isError,
    handleSubmit,
    handleChange,
    handleRadio,
  } = useContext(UserContext);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <StyledCalculatorContainer>
          <StyledFirstSection>
            <header>
              <h3>Mortgage Calculator</h3>
            </header>
            <p onClick={clearAll}>Clear All</p>
          </StyledFirstSection>
          <StyledSecondSection>
            <label htmlFor="mortgageAmount">Mortgage Amount</label>
            <InputContainer>
              <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                <LabelSign
                  customProp={changeFocusBg.first}
                  errorProp={state.firstInputFocus}
                >
                  £
                </LabelSign>
              </StyleSheetManager>
              <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                <Input
                  errorProp={state.firstInputFocus}
                  id="mortgageAmount"
                  name="mortgageAmount"
                  type="number"
                  value={isValue.mortgageAmount}
                  onFocus={() => setChangFocusBg(() => ({ first: true }))}
                  onBlur={() => setChangFocusBg(() => ({ first: false }))}
                  onChange={handleChange}
                />
              </StyleSheetManager>
            </InputContainer>
            {state.firstInputFocus && (
              <StyledSpan>This field is required</StyledSpan>
            )}
          </StyledSecondSection>
          <StyledThirdSection>
            <StyledDiv>
              <label htmlFor="mortgageTerm">Mortgage Term</label>
              <InputContainer>
                <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                  <LabelSignSection2
                    customProp={changeFocusBg.second}
                    errorProp={state.secondInputFocus}
                  >
                    years
                  </LabelSignSection2>
                </StyleSheetManager>
                <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                  <InputSection2
                    errorProp={state.secondInputFocus}
                    id="martgageTerm"
                    type="number"
                    name="mortgageTerm"
                    value={isValue.mortgageTerm}
                    onFocus={() => setChangFocusBg(() => ({ second: true }))}
                    onBlur={() => setChangFocusBg(() => ({ second: false }))}
                    onChange={handleChange}
                  />
                </StyleSheetManager>
              </InputContainer>
              {state.secondInputFocus && (
                <StyledSpan>This field is required</StyledSpan>
              )}
            </StyledDiv>
            <StyledDiv>
              <label htmlFor="interestRate">Interest Rate</label>
              <InputContainer>
                <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                  <LabelSignSection2
                    customProp={changeFocusBg.third}
                    errorProp={state.thirdInputFocus}
                  >
                    %
                  </LabelSignSection2>
                </StyleSheetManager>
                <StyleSheetManager shouldForwardProp={shouldForwardProp}>
                  <InputSection2
                    errorProp={state.thirdInputFocus}
                    id="interestRate"
                    name="interestRate"
                    type="number"
                    value={isValue.interestRate}
                    onFocus={() => setChangFocusBg(() => ({ third: true }))}
                    onBlur={() => setChangFocusBg(() => ({ third: false }))}
                    onChange={handleChange}
                  />
                </StyleSheetManager>
              </InputContainer>
              {state.thirdInputFocus && (
                <StyledSpan>This field is required</StyledSpan>
              )}
            </StyledDiv>
          </StyledThirdSection>
          <StyledFourthSection>
            <label>Mortgage Type</label>
            <RadioSelection>
              <input
                type="radio"
                name="selection"
                id="repayment"
                value="repayment"
                checked={isChecked === "repayment"}
                onChange={handleRadio}
              />
              <label htmlFor="repayment">Repayment</label>
            </RadioSelection>
            <RadioSelection>
              <input
                type="radio"
                name="selection"
                id="interest"
                value="interest"
                checked={isChecked === "interest"}
                onChange={handleRadio}
              />
              <label htmlFor="interest">Interest Only</label>
            </RadioSelection>
            {isError && <StyledSpan>This field is required</StyledSpan>}
          </StyledFourthSection>
          <StyledButton>
            <input type="submit" value="Calculate Repayments" />
          </StyledButton>
        </StyledCalculatorContainer>
      </Form>
    </>
  );
};

export default CalculatorContainer;
