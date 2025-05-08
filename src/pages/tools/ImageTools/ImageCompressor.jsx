import React, { useState } from "react";
import "./ImageCompressor.css";

const ImageCompressor = () => {
  const [image, setImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setCompressedImage(null);
      setError("");
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const compressImage = async () => {
    if (!image) {
      setError("Please upload an image to compress.");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      const mockCompressedImage = URL.createObjectURL(image); // Placeholder
      setCompressedImage(mockCompressedImage);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="image-compressor-container">
      {/* Ads */}
      <div className="image-compressor-ad image-compressor-ad-top">Top Ad</div>
      <div className="image-compressor-ad image-compressor-ad-left">Left Ad</div>
      <div className="image-compressor-ad image-compressor-ad-right">Right Ad</div>
      <div className="image-compressor-ad image-compressor-ad-bottom">Bottom Ad</div>

      {/* Main Content */}
      <div className="image-compressor-content">
        <h2 className="image-compressor-title">Image Compressor</h2>

        <label className="image-compressor-label">Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="image-compressor-input"
        />

        <button
          onClick={compressImage}
          className="image-compressor-button"
          disabled={loading}
        >
          {loading ? "Compressing..." : "Compress Image"}
        </button>

        {error && <div className="image-compressor-error">{error}</div>}

        {compressedImage && (
          <div className="image-compressor-result">
            <h3>Compressed Image Preview</h3>
            <img
              src={compressedImage}
              alt="Compressed"
              className="image-compressor-preview"
            />
            <a href={compressedImage} download="compressed-image.png">
              <button className="image-compressor-button">Download</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCompressor;
