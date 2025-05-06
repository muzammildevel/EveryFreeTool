// src/pages/tools/WebTools/IPToLocation.jsx
import React, { useState } from "react";
import "./IPToLocation.css";

const IPToLocation = () => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getLocation = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://ipinfo.io/json?token=c21e21fa941694");
      if (!response.ok) throw new Error("Failed to fetch IP data.");
      const data = await response.json();
      setIpData(data);
    } catch (err) {
      setError("Error retrieving location. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ipToLocation-container">
      <div className="ipToLocation-ads ad-top">Ad Banner Top</div>
      <div className="ipToLocation-main">
        <h2 className="ipToLocation-heading">IP to Location Finder</h2>
        <button className="ipToLocation-btn" onClick={getLocation} disabled={loading}>
          {loading ? "Fetching..." : "Get My Location"}
        </button>

        {error && <p className="ipToLocation-error">{error}</p>}

        {ipData && (
          <div className="ipToLocation-result">
            <p><strong>IP:</strong> {ipData.ip}</p>
            <p><strong>City:</strong> {ipData.city}</p>
            <p><strong>Region:</strong> {ipData.region}</p>
            <p><strong>Country:</strong> {ipData.country}</p>
            <p><strong>Postal:</strong> {ipData.postal}</p>
            <p><strong>Timezone:</strong> {ipData.timezone}</p>
            <p><strong>Org:</strong> {ipData.org}</p>
          </div>
        )}
      </div>
      <div className="ipToLocation-ads ad-bottom">Ad Banner Bottom</div>
      <div className="ipToLocation-ads ad-left">Ad Left</div>
      <div className="ipToLocation-ads ad-right">Ad Right</div>
    </div>
  );
};

export default IPToLocation;
