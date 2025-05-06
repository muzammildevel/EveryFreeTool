import React from "react";
import { Link } from "react-router-dom";
import "./TextTools.css";

const TextTools = () => {
  return (
    <div className="text-tools-page">
      <div className="text-tools-ad text-tools-ad-left">Ad Left</div>
      <div className="text-tools-ad text-tools-ad-right">Ad Right</div>

      <div className="text-tools-content">
        <div className="text-tools-ad text-tools-ad-top">Ad Top</div>

        <h1 className="text-tools-title">📝 All Text Tools</h1>
        <p className="text-tools-description">Select a text tool below:</p>

        <ul className="text-tools-list">
          <li><Link to="/tools/text/word-counter">Word Counter</Link></li>
          <li><Link to="/tools/text/character-counter">Character Counter</Link></li>
          <li><Link to="/tools/text/text-case-converter">Text Case Converter</Link></li>
          <li><Link to="/tools/text/remove-duplicate-lines">Remove Duplicate Lines</Link></li>
          <li><Link to="/tools/text/text-reverser">Text Reverser</Link></li>
        </ul>

        <div className="text-tools-ad text-tools-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default TextTools;
