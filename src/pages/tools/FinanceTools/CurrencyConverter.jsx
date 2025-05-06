import React, { useState } from "react";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const currencies = ["USD", "EUR", "GBP", "INR", "AUD", "CAD"];

  const convertCurrency = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();

      if (data.error) {
        setError("Failed to fetch exchange rates.");
        setLoading(false);
        return;
      }

      const conversionRate = data.rates[toCurrency];
      if (conversionRate) {
        setConvertedAmount((amount * conversionRate).toFixed(2));
      } else {
        setError("Conversion failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while fetching conversion rates.");
    }

    setLoading(false);
  };

  return (
    <div className="currency-converter-wrapper">
      <div className="currency-converter-ad currency-converter-ad-top">Top Ad</div>

      <div className="currency-converter-main">
        <div className="currency-converter-ad currency-converter-ad-left">Left Ad</div>

        <div className="currency-converter-tool">
          <h2 className="currency-converter-title">Currency Converter</h2>

          <div className="currency-converter-field">
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="currency-converter-input"
              placeholder="Enter amount"
            />
          </div>

          <div className="currency-converter-field">
            <label htmlFor="fromCurrency">From:</label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="currency-converter-select"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="currency-converter-field">
            <label htmlFor="toCurrency">To:</label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="currency-converter-select"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={convertCurrency}
            disabled={loading}
            className="currency-converter-button"
          >
            {loading ? "Converting..." : "Convert"}
          </button>

          {convertedAmount !== null && !loading && (
            <div className="currency-converter-result">
              <h3>
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
              </h3>
            </div>
          )}

          {error && <div className="currency-converter-error">{error}</div>}
        </div>

        <div className="currency-converter-ad currency-converter-ad-right">Right Ad</div>
      </div>

      <div className="currency-converter-ad currency-converter-ad-bottom">Bottom Ad</div>
    </div>
  );
};

export default CurrencyConverter;
