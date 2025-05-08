import React from "react";
import { Link } from "react-router-dom";
import "./VideoTools.css";

const VideoTools = () => {
  return (
    <div className="video-tools-page">
      <div className="video-tools-ad video-tools-ad-left">Ad Left</div>
      <div className="video-tools-ad video-tools-ad-right">Ad Right</div>

      <div className="video-tools-content">
        <div className="video-tools-ad video-tools-ad-top">Ad Top</div>

        <h1 className="video-tools-title">🎬 All Video Tools</h1>
        <p className="video-tools-description">Select a video tool below:</p>

        <ul className="video-tools-list">
          <li><Link to="/tools/video/video-compressor">Video Compressor</Link></li>
          <li><Link to="/tools/video/video-to-gif">Video to GIF Converter</Link></li>
          <li><Link to="/tools/video/video-cutter">Video Cutter</Link></li>
          <li><Link to="/tools/video/video-merger">Video Merger</Link></li>
          <li><Link to="/tools/video/video-to-mp3">Video to MP3 Converter</Link></li>
        </ul>

        <div className="video-tools-ad video-tools-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default VideoTools;
