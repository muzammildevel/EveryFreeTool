import React, { useState, useRef } from 'react';
import './MP3Cutter.css';

const MP3Cutter = () => {
  const [audioFile, setAudioFile] = useState(null);
  const audioRef = useRef();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes('audio')) {
      setAudioFile(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mp3-cutter-wrapper">
      <div className="ad ad-top">Your Top Ad Here</div>

      <div className="mp3-cutter-body">
        <div className="ad ad-left">Left Ad</div>

        <div className="mp3-cutter-main">
          <h1>Online MP3 Cutter Tool</h1>
          <p className="description">
            Trim your MP3 and audio files with millisecond precision. Use fade-in/out effects, adjust volume, speed, and pitch. Export as MP3, WAV, or ringtone. 100% free and secure.
          </p>

          <label className="upload-label">
            Upload Audio File:
            <input type="file" accept="audio/*" onChange={handleFileUpload} className="upload-input" />
          </label>

          {audioFile && (
            <div className="audio-player">
              <audio ref={audioRef} controls src={audioFile}></audio>
              {/* Future feature panel: timeline selection, trim buttons, export */}
            </div>
          )}
        </div>

        <div className="ad ad-right">Right Ad</div>
      </div>

      <div className="ad ad-bottom">Your Bottom Ad Here</div>
    </div>
  );
};

export default MP3Cutter;