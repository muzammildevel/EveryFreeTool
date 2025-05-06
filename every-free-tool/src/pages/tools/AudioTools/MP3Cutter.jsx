import React, { useState, useRef } from "react";
import "./MP3Cutter.css";

const MP3Cutter = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes("audio")) {
      setAudioFile(file);
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
    } else {
      alert("Please upload a valid MP3 file.");
    }
  };

  const handleCutAudio = () => {
    alert(`This would cut the audio from ${startTime}s to ${endTime}s. Backend processing required.`);
  };

  return (
    <div className="mp3-cutter-page">
      <div className="mp3-cutter-ad mp3-cutter-ad-left">Ad Left</div>
      <div className="mp3-cutter-ad mp3-cutter-ad-right">Ad Right</div>

      <div className="mp3-cutter-container">
        <div className="mp3-cutter-ad mp3-cutter-ad-top">Ad Top</div>

        <h2 className="mp3-cutter-title">🎧 MP3 Cutter Tool</h2>

        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="mp3-cutter-input"
        />

        {audioUrl && (
          <>
            <audio controls ref={audioRef} src={audioUrl} className="mp3-cutter-audio" />

            <div className="mp3-cutter-range-group">
              <label>Start Time (sec):</label>
              <input
                type="number"
                min="0"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            <div className="mp3-cutter-range-group">
              <label>End Time (sec):</label>
              <input
                type="number"
                min={startTime}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>

            <button className="mp3-cutter-button" onClick={handleCutAudio}>
              Cut MP3 (Preview Only)
            </button>
          </>
        )}

        <div className="mp3-cutter-ad mp3-cutter-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default MP3Cutter;
