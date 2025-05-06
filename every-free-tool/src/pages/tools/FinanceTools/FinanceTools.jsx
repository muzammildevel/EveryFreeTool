import React from "react";
import { Link } from "react-router-dom";
import "./FinanceTools.css";

const FinanceTools = () => {
  return (
    <div className="finance-tools-page">
      <div className="finance-tools-ad finance-tools-ad-left">Ad Left</div>
      <div className="finance-tools-ad finance-tools-ad-right">Ad Right</div>

      <div className="finance-tools-content">
        <div className="finance-tools-ad finance-tools-ad-top">Ad Top</div>

        <h1 className="finance-tools-title">💰 All Finance Tools</h1>
        <p className="finance-tools-description">Select a finance tool below:</p>

        <ul className="finance-tools-list">
          <li><Link to="/tools/finance/currency-converter">Currency Converter</Link></li>
          <li><Link to="/tools/finance/loan-calculator">Loan Calculator</Link></li>
          <li><Link to="/tools/finance/tax-calculator">Tax Calculator</Link></li>
          <li><Link to="/tools/finance/sip-calculator">SIP Calculator</Link></li>
          <li><Link to="/tools/finance/emi-calculator">EMI Calculator</Link></li>
        </ul>

        <div className="finance-tools-ad finance-tools-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default FinanceTools;
