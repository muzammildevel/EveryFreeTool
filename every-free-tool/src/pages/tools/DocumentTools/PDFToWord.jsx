import React, { useState } from "react";
import "./PDFToWord.css";

const PDFToWord = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setConvertedFile(null);
      setError("");
    } else {
      setError("Please upload a valid PDF file.");
    }
  };

  const convertToWord = () => {
    if (!pdfFile) {
      setError("Please select a PDF file to convert.");
      return;
    }

    setError("");
    setLoading(true);

    // Simulated API conversion
    setTimeout(() => {
      setConvertedFile("https://example.com/converted-file.docx");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="pdf-to-word-wrapper">
      <div className="pdf-to-word-ad pdf-to-word-ad-top">Top Ad</div>
      <div className="pdf-to-word-main">
        <div className="pdf-to-word-ad pdf-to-word-ad-left">Left Ad</div>

        <div className="pdf-to-word-tool">
          <h2 className="pdf-to-word-title">PDF to Word Converter</h2>

          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="pdf-to-word-input"
          />

          <button
            onClick={convertToWord}
            disabled={loading}
            className="pdf-to-word-button"
          >
            {loading ? "Converting..." : "Convert PDF to Word"}
          </button>

          {error && <p className="pdf-to-word-error">{error}</p>}

          {convertedFile && (
            <div className="pdf-to-word-result">
              <h3>Converted Word Document:</h3>
              <a href={convertedFile} download="converted-file.docx">
                <button className="pdf-to-word-button">Download Word File</button>
              </a>
            </div>
          )}
        </div>

        <div className="pdf-to-word-ad pdf-to-word-ad-right">Right Ad</div>
      </div>
      <div className="pdf-to-word-ad pdf-to-word-ad-bottom">Bottom Ad</div>
    </div>
  );
};

export default PDFToWord;
