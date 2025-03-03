import "./CurrencyStyling.css";

function CurrencyDropdown() {
    return (
        <div className="container">
            <p>I want to convert</p>
            <select name="currency" id="currencySelect">
                <option value="usd">USD</option>
                <option value="jpy">JPY</option>
                <option value="sgd">SGD</option>
                <option value="myr">MYR</option>
            </select>
        </div>
    )
}