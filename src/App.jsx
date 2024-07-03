import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // convert from string to number value
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />;
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter a nonzero duration</p>
      )}
    </>
  );
}

export default App;
