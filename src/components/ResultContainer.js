import { useContext } from "react";
import { UserContext } from "./Body";
import { StyledResultContainer } from "./styles/Body.styled";

import {
  ResultShownHere,
  YourResult,
  PaymentContainer,
} from "./styles/Result.styled";

const ResultContainer = () => {
  const { showResult, hideResult, calculation, isChecked } =
    useContext(UserContext);

  const {
    monthlyPaymentToString,
    totalPaymentToString,
    totalInterestRateToString,
  } = calculation();
  return (
    <>
      <StyledResultContainer>
        {showResult && (
          <YourResult>
            <h4>Your Results</h4>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              "calculate repayment" again.
            </p>
            <PaymentContainer>
              <div>
                <p>Your monthly repayments</p>
                {isChecked === "repayment" && (
                  <h1>£{monthlyPaymentToString}</h1>
                )}
                {isChecked === "interest" && (
                  <h1>£{totalInterestRateToString}</h1>
                )}
                <p>Total you'll repay over the term</p>
                <h4>£{totalPaymentToString} </h4>
              </div>
            </PaymentContainer>
          </YourResult>
        )}
        {!hideResult && (
          <ResultShownHere>
            <img
              src="./images/illustration-empty.svg"
              alt="illustration"
              width="140px"
            />
            <h4>Results Shown Here</h4>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </ResultShownHere>
        )}
      </StyledResultContainer>
    </>
  );
};

export default ResultContainer;
