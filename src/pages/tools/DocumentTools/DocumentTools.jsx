import React from "react";
import { Link } from "react-router-dom";
import "./DocumentTools.css";

const DocumentTools = () => {
  return (
    <div className="document-tools-page">
      <div className="document-tools-ad document-tools-ad-left">Ad Left</div>
      <div className="document-tools-ad document-tools-ad-right">Ad Right</div>

      <div className="document-tools-content">
        <div className="document-tools-ad document-tools-ad-top">Ad Top</div>

        <h1 className="document-tools-title">📄 All Document Tools</h1>
        <p className="document-tools-description">Select a document tool below:</p>

        <ul className="document-tools-list">
          <li><Link to="/tools/document/pdf-to-word">PDF to Word Converter</Link></li>
          <li><Link to="/tools/document/word-to-pdf">Word to PDF Converter</Link></li>
          <li><Link to="/tools/document/pdf-merger">PDF Merger</Link></li>
          <li><Link to="/tools/document/pdf-splitter">PDF Splitter</Link></li>
          <li><Link to="/tools/document/pdf-compressor">PDF Compressor</Link></li>
        </ul>

        <div className="document-tools-ad document-tools-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default DocumentTools;
