import React from "react";
import { Link } from "react-router-dom";
import "./WebTools.css";

const WebTools = () => {
  return (
    <div className="web-tools-page">
      <div className="web-tools-ad web-tools-ad-left">Ad Left</div>
      <div className="web-tools-ad web-tools-ad-right">Ad Right</div>

      <div className="web-tools-content">
        <div className="web-tools-ad web-tools-ad-top">Ad Top</div>

        <h1 className="web-tools-title">🌐 All Web Tools</h1>
        <p className="web-tools-description">Select a web tool below:</p>

        <ul className="web-tools-list">
          <li><Link to="/tools/web/ip-to-location">IP to Location</Link></li>
          <li><Link to="/tools/web/user-agent">User Agent Checker</Link></li>
          <li><Link to="/tools/web/website-status">Website Status Checker</Link></li>
          <li><Link to="/tools/web/dns-lookup">DNS Lookup</Link></li>
          <li><Link to="/tools/web/http-headers">HTTP Headers Checker</Link></li>
        </ul>

        <div className="web-tools-ad web-tools-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default WebTools;
