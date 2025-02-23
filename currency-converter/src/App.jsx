import { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(()=>{
    console.log("Making API request")
  },[])

  return (
    <>
      <h1>Currency Converter</h1>
      <select name="currency" id="currencySelect">
      <option value="usd">USD</option>
      <option value="jpy">JPY</option>
      <option value="sgd">SGD</option>
      <option value="myr">MYR</option>
      </select>
    </>
  )
}

export default App;
