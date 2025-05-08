import React, { useState } from "react";
import "./ImageResizer.css";

const ImageResizer = () => {
  const [image, setImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [lockAspect, setLockAspect] = useState(false);
  const [originalAspect, setOriginalAspect] = useState(1);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setResizedImage(null);
      const img = new Image();
      img.onload = () => {
        setOriginalAspect(img.width / img.height);
      };
      img.src = URL.createObjectURL(file);
    } else {
      setError("Please upload a valid image file.");
    }
  };

  const handleWidthChange = (e) => {
    const value = e.target.value;
    setWidth(value);
    if (lockAspect && value) {
      setHeight(Math.round(value / originalAspect));
    }
  };

  const handleHeightChange = (e) => {
    const value = e.target.value;
    setHeight(value);
    if (lockAspect && value) {
      setWidth(Math.round(value * originalAspect));
    }
  };

  const resizeImage = () => {
    if (!image || !width || !height) {
      setError("Please upload an image and specify width and height.");
      return;
    }

    const reader = new FileReader();
    const img = new Image();

    reader.onloadend = () => {
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = parseInt(width);
        canvas.height = parseInt(height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setResizedImage(canvas.toDataURL());
        setError("");
      };
    };

    reader.readAsDataURL(image);
  };

  return (
    <div className="image-resizer-container">
      {/* Ad Areas */}
      <div className="image-resizer-ad image-resizer-ad-top">Top Ad</div>
      <div className="image-resizer-ad image-resizer-ad-left">Left Ad</div>
      <div className="image-resizer-ad image-resizer-ad-right">Right Ad</div>
      <div className="image-resizer-ad image-resizer-ad-bottom">Bottom Ad</div>

      {/* Main Content */}
      <div className="image-resizer-content">
        <h2 className="image-resizer-title">Image Resizer</h2>

        <label className="image-resizer-label">Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="image-resizer-input" />

        <div className="image-resizer-controls">
          <div>
            <label className="image-resizer-label">Width:</label>
            <input type="number" value={width} onChange={handleWidthChange} className="image-resizer-input" />
          </div>
          <div>
            <label className="image-resizer-label">Height:</label>
            <input type="number" value={height} onChange={handleHeightChange} className="image-resizer-input" />
          </div>
          <div>
            <label className="image-resizer-label">Lock Aspect Ratio:</label>
            <input
              type="checkbox"
              checked={lockAspect}
              onChange={() => setLockAspect(!lockAspect)}
            />
          </div>
        </div>

        <button className="image-resizer-button" onClick={resizeImage}>Resize Image</button>

        {error && <div className="image-resizer-error">{error}</div>}

        {resizedImage && (
          <div className="image-resizer-result">
            <h3>Resized Image Preview</h3>
            <img src={resizedImage} alt="Resized" className="image-resizer-preview" />
            <a href={resizedImage} download="resized-image.png">
              <button className="image-resizer-button">Download</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageResizer;
