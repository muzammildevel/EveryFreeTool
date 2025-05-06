import React, { useState } from "react";
import "./BackgroundRemover.css";

const BackgroundRemover = () => {
  const [image, setImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setProcessedImage(null);
      setError("");
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const removeBackground = async () => {
    if (!image) {
      setError("Please upload an image to remove the background.");
      return;
    }

    setLoading(true);
    setError("");

    // Simulate background removal - replace with real API call
    setTimeout(() => {
      const mockProcessedImage = URL.createObjectURL(image); // Mock output
      setProcessedImage(mockProcessedImage);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="background-remover-container">
      {/* Ads */}
      <div className="background-remover-ad background-remover-ad-top">Top Ad</div>
      <div className="background-remover-ad background-remover-ad-left">Left Ad</div>
      <div className="background-remover-ad background-remover-ad-right">Right Ad</div>
      <div className="background-remover-ad background-remover-ad-bottom">Bottom Ad</div>

      {/* Main Tool UI */}
      <div className="background-remover-content">
        <h2 className="background-remover-title">Background Remover</h2>

        <label className="background-remover-label">Upload Image:</label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="background-remover-input"
        />

        <button
          onClick={removeBackground}
          disabled={loading}
          className="background-remover-button"
        >
          {loading ? "Removing Background..." : "Remove Background"}
        </button>

        {error && <div className="background-remover-error">{error}</div>}

        {processedImage && (
          <div className="background-remover-result">
            <h3>Processed Image Preview</h3>
            <img
              src={processedImage}
              alt="Processed"
              className="background-remover-preview"
            />
            <a href={processedImage} download="processed-image.png">
              <button className="background-remover-button">Download</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundRemover;
