import React from "react";
import { Link } from "react-router-dom";
import "./ImageTools.css";

const ImageTools = () => {
  return (
    <div className="image-tools-page">
      <div className="image-tools-ad image-tools-ad-left">Ad Left</div>
      <div className="image-tools-ad image-tools-ad-right">Ad Right</div>

      <div className="image-tools-content">
        <div className="image-tools-ad image-tools-ad-top">Ad Top</div>

        <h1 className="image-tools-title">🖼️ All Image Tools</h1>
        <p className="image-tools-description">Choose an image tool below:</p>

        <ul className="image-tools-list">
          <li><Link to="/tools/image/image-resizer">Image Resizer</Link></li>
          <li><Link to="/tools/image/image-compressor">Image Compressor</Link></li>
          <li><Link to="/tools/image/image-converter">Image Converter</Link></li>
          <li><Link to="/tools/image/image-cropper">Image Cropper</Link></li>
          <li><Link to="/tools/image/image-to-text">Image to Text (OCR)</Link></li>
        </ul>

        <div className="image-tools-ad image-tools-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default ImageTools;
