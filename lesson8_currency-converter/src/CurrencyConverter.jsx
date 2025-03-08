import { useEffect, useState, useContext } from "react";
import CurrencyContext from "./Contexts/CurrencyContext";

function CurrencyConverter() {
  const [convertedAmount, setConvertedAmount] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const CurrencyContextValue = useContext(CurrencyContext);


  // props.currencyFrom
  // props.currencyTo

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/pair/" +
        CurrencyContextValue.currencyFrom +
        "/" +
        CurrencyContextValue.currencyTo +
        "/" +
        fromAmount
    )
      .then((res) => res.json())
      .then((data) => setConvertedAmount(data.conversion_result));
  }, [
    fromAmount, 
    CurrencyContextValue.currencyFrom, 
    CurrencyContextValue.currencyTo,
  ]);

  function onUserInput(event) {
    setFromAmount(event.target.value);
  }

  return (
    <div className="container">
      {/* Controlled component */}
      <input
        value={fromAmount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={onUserInput}
      />
      <p>{CurrencyContextValue.currencyFrom}</p>
      <p>=</p>
      <p className="converted-amount">{convertedAmount}</p>
      <p>{CurrencyContextValue.currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
