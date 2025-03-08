import { useEffect, useState, useContext } from "react";
import "./CurrencyStyling.css";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyContext from "./Contexts/CurrencyContext";

function CurrencyDropdown() {
  const [currencyList, setCurrencyList] = useState([]);
  // const [currencyFrom, setCurrencyFrom] = useState("USD");
  // const [currencyTo, setCurrencyTo] = useState("SGD");
  const CurrencyContextValue = useContext(CurrencyContext);

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/codes")
      .then((res) => res.json())
      .then((data) => setCurrencyList(data.supported_codes));

    // setCurrencyList([
    //   ["USD", "United States Dollar"],
    //   ["SGD", "Singapore Dollar"],
    // ]);
  }, []);

  return (
    <div>
      <div className="container">
        <p>I want to convert</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={(event) => {
            CurrencyContextValue.setCurrencyFrom(event.target.value);
          }}
          value={CurrencyContextValue.currencyFrom}
        >
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
        <p>to</p>
        <select
          name="currency"
          id="currencySelect"
          onChange={(event) => {
            CurrencyContextValue.setCurrencyTo(event.target.value);
          }}
          value={CurrencyContextValue.currencyTo}
        >
          {currencyList.map((currencyItem) => (
            <option value={currencyItem[0]}>{currencyItem[1]}</option>
          ))}
        </select>
      </div>
      <CurrencyConverter currencyFrom={CurrencyContextValue.currencyFrom} currencyTo={CurrencyContextValue.currencyTo} />
    </div>
  );
}

export default CurrencyDropdown;
