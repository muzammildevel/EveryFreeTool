import React, { useState } from "react";
import "./JPGToPNG.css";

const JPGToPNG = () => {
  const [image, setImage] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "image/jpeg") {
      setImage(file);
      setConvertedImage(null);
      setError("");
    } else {
      setError("Please upload a valid JPG image.");
    }
  };

  const convertToPNG = () => {
    if (!image) {
      setError("Please upload a JPG image before converting.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const pngData = canvas.toDataURL("image/png");
        setConvertedImage(pngData);
      };
    };
    reader.readAsDataURL(image);
  };

  return (
    <div className="jpg-to-png-container">
      {/* Ads */}
      <div className="jpg-to-png-ad jpg-to-png-ad-top">Top Ad</div>
      <div className="jpg-to-png-ad jpg-to-png-ad-left">Left Ad</div>
      <div className="jpg-to-png-ad jpg-to-png-ad-right">Right Ad</div>
      <div className="jpg-to-png-ad jpg-to-png-ad-bottom">Bottom Ad</div>

      {/* Main Tool */}
      <div className="jpg-to-png-content">
        <h2 className="jpg-to-png-title">JPG to PNG Converter</h2>

        <input
          type="file"
          accept="image/jpeg"
          onChange={handleFileChange}
          className="jpg-to-png-input"
        />

        <button onClick={convertToPNG} className="jpg-to-png-button">
          Convert to PNG
        </button>

        {error && <div className="jpg-to-png-error">{error}</div>}

        {convertedImage && (
          <div className="jpg-to-png-result">
            <h3>Converted PNG Image</h3>
            <img
              src={convertedImage}
              alt="Converted"
              className="jpg-to-png-preview"
            />
            <a href={convertedImage} download="converted.png">
              <button className="jpg-to-png-button">Download PNG</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default JPGToPNG;
