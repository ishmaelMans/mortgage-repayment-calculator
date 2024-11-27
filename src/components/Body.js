import Container from "./styles/Container.styled";
import { useState, createContext, useEffect } from "react";
import CalculatorContainer from "./CalculatorContainer";
import ResultContainer from "./ResultContainer";
import { StyledBody } from "./styles/Body.styled";

export const UserContext = createContext();

const Body = () => {
  // const formatNumberWithCommas = (result) => {
  //   result = result.replace(/\D/g, "");
  //   return result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  const formatNumberWithCommas = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [showResult, setShowResult] = useState(false);
  const [hideResult, setHideResult] = useState(false);

  const [changeFocusBg, setChangFocusBg] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [isValue, setIsValue] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
  });

  const [state, setState] = useState({
    firstInputFocus: false,
    secondInputFocus: false,
    thirdInputFocus: false,
  });

  const [isChecked, setIsChecked] = useState("");

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if ({ isError, state }) {
      const timer = setTimeout(() => {
        setIsError(false);
        setState(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isError, state]);

  const handleChange = (e) => {
    // const formattedValue = formatNumberWithCommas(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    if (name === "mortgageTerm" && value > 100) {
      return;
    }
    if (name === "interestRate" && value > 1000) {
      return;
    }
    setIsValue({ ...isValue, [name]: value });
    // setIsValue({
    //   ...isValue,
    //   [name]: value,
    // });
  };

  const handleRadio = (e) => {
    const value = e.target.value;
    setIsChecked(value);
    setIsError(false);
  };

  const calculation = () => {
    const P = parseInt(isValue.mortgageAmount);
    const mortgageTerm = parseInt(isValue.mortgageTerm);
    const interestRate = parseInt(isValue.interestRate) / 100;

    const numberOfPayments = mortgageTerm * 12;
    const monthlyInterestRate = interestRate / 12;
    const rBracket = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const rBracketTop = monthlyInterestRate * rBracket;
    const rBracketBottom = rBracket - 1;
    const R = rBracketTop / rBracketBottom;

    const monthlyPayment = Math.floor(P * R);
    const totalPayment = Math.floor(numberOfPayments * monthlyPayment);
    const interestRateAmount = Math.floor(totalPayment - P);
    const monthlyInterest = interestRateAmount / 12;

    const monthlyPaymentToString = formatNumberWithCommas(
      monthlyPayment.toFixed(2)
    );
    const totalPaymentToString = formatNumberWithCommas(
      totalPayment.toFixed(2)
    );
    const totalInterestRateToString = formatNumberWithCommas(
      interestRateAmount.toFixed(2)
    );
    const monthlyInterestRateToString = formatNumberWithCommas(
      monthlyInterest.toFixed(2)
    );

    return {
      monthlyPaymentToString,
      totalPaymentToString,
      totalInterestRateToString,
      monthlyInterestRateToString,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      setIsError(true);
    }

    calculation();

    const newErrors = {
      firstInputFocus: isValue.mortgageAmount === "",
      secondInputFocus: isValue.mortgageTerm === "",
      thirdInputFocus: isValue.interestRate === "",
    };

    setState(newErrors);

    const allFieldsFilled = Object.values(newErrors).every((error) => !error);
    if (allFieldsFilled) {
      setTimeout(() => {
        setShowResult(true);
        setHideResult(true);
      }, 100); // Clear form after 3 seconds }
    }
  };

  const clearAll = () => {
    setIsValue({ mortgageAmount: "", mortgageTerm: "", interestRate: "" });
    setIsChecked(false);
    setHideResult(false);
    setShowResult(false);
  };

  return (
    <>
      <Container>
        <StyledBody>
          <UserContext.Provider
            value={{
              state,
              setState,
              isChecked,
              setIsChecked,
              isValue,
              setIsValue,
              changeFocusBg,
              setChangFocusBg,
              isError,
              setIsError,
              handleSubmit,
              handleChange,
              handleRadio,
              clearAll,
              showResult,
              setShowResult,
              hideResult,
              setHideResult,
              calculation,
            }}
          >
            <CalculatorContainer />
            <ResultContainer />
          </UserContext.Provider>
        </StyledBody>
      </Container>
    </>
  );
};

export default Body;
