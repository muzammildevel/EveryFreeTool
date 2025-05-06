import React, { useState } from "react";
import axios from "axios"; // To make HTTP requests
import "./AudioConverter.css";

const AudioConverter = () => {
  const [audio, setAudio] = useState(null);
  const [convertedAudio, setConvertedAudio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [format, setFormat] = useState("mp3");

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("audio/")) {
      setAudio(file);
      setConvertedAudio(null); // Reset converted audio when a new file is selected
      setError(""); // Clear any previous errors
    } else {
      setError("Please upload a valid audio file.");
    }
  };

  const convertAudio = async () => {
    if (!audio) {
      setError("Please upload an audio file to convert.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("audio", audio);
    formData.append("format", format);

    try {
      const response = await axios.post("http://localhost:3000/convert-audio", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // Get the file as a blob
      });

      // Create a download link for the converted audio file
      const url = URL.createObjectURL(response.data);
      setConvertedAudio(url);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("Error converting audio. Please try again.");
    }
  };

  return (
    <div className="audio-converter-page">
      <div className="audio-converter-ad audio-converter-ad-left">Ad Left</div>
      <div className="audio-converter-ad audio-converter-ad-right">Ad Right</div>

      <div className="audio-converter-content">
        <div className="audio-converter-ad audio-converter-ad-top">Ad Top</div>

        <h2 className="audio-converter-title">🎧 Audio Converter</h2>

        <div className="audio-converter-input-group">
          <label htmlFor="audio-upload" className="audio-converter-label">Upload Audio File:</label>
          <input
            id="audio-upload"
            type="file"
            accept="audio/*"
            className="audio-converter-input"
            onChange={handleAudioChange}
          />
        </div>

        <div className="audio-converter-input-group">
          <label htmlFor="audio-format" className="audio-converter-label">Choose Format:</label>
          <select
            id="audio-format"
            className="audio-converter-select"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="mp3">MP3</option>
            <option value="wav">WAV</option>
            <option value="flac">FLAC</option>
          </select>
        </div>

        <button 
          className="audio-converter-button"
          onClick={convertAudio} 
          disabled={loading}
        >
          {loading ? "Converting..." : "Convert Audio"}
        </button>

        {error && <div className="audio-converter-error">{error}</div>}

        {convertedAudio && (
          <div className="audio-converter-result">
            <h3>Converted Audio:</h3>
            <audio controls className="audio-converter-audio">
              <source src={convertedAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <a href={convertedAudio} download={`converted-audio.${format}`}>
              <button className="audio-converter-download-button">Download Converted Audio</button>
            </a>
          </div>
        )}

        <div className="audio-converter-ad audio-converter-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default AudioConverter;
