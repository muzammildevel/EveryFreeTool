import React from "react";
import { Link } from "react-router-dom";
import "./AudioTools.css";

const AudioTools = () => {
  return (
    <div className="audio-tools-page">
      <div className="audio-tools-ad audio-tools-ad-left">Ad Left</div>
      <div className="audio-tools-ad audio-tools-ad-right">Ad Right</div>

      <div className="audio-tools-content">
        <div className="audio-tools-ad audio-tools-ad-top">Ad Top</div>

        <h1 className="audio-tools-title">🎧 All Audio Tools</h1>
        <p className="audio-tools-description">Select an audio tool below:</p>

        <ul className="audio-tools-list">
          <li><Link to="/tools/audio/mp3-cutter">MP3 Cutter</Link></li>
          <li><Link to="/tools/audio/audio-converter">Audio Converter</Link></li>
          <li><Link to="/tools/audio/audio-merger">Audio Merger</Link></li>
          <li><Link to="/tools/audio/audio-trimmer">Audio Trimmer</Link></li>
          <li><Link to="/tools/audio/audio-to-text">Audio to Text Converter</Link></li>
        </ul>

        <div className="audio-tools-ad audio-tools-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default AudioTools;
