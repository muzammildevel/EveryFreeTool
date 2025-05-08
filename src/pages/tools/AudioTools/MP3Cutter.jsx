import React, { useState, useRef } from 'react';
import './MP3Cutter.css';

const MP3Cutter = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(10);
  const [fileSource, setFileSource] = useState('');
  const audioRef = useRef();

  // Handle file upload from local drag-and-drop or direct upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.includes('audio')) {
      setAudioFile(URL.createObjectURL(file));
    }
  };

  // Handle file upload from URL, Google Drive, or Dropbox
  const handleFileSourceChange = (e) => {
    setFileSource(e.target.value);
  };

  const handleFileFromURL = (url) => {
    if (url) {
      setAudioFile(url);
    }
  };

  const handleTrim = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = startTime;
      audioRef.current.play();
    }
  };

  const handleExport = () => {
    const audioBlob = audioFile;
    const link = document.createElement('a');
    link.href = audioBlob;
    link.download = 'trimmed-audio.mp3';
    link.click();
  };

  return (
    <div className="mp3-cutter-wrapper">
      {/* Ad Space Top */}
      <div className="ad ad-top">Your Top Ad Here</div>

      <div className="mp3-cutter-body">
        {/* Ad Space Left */}
        <div className="ad ad-left">Left Ad</div>

        {/* Main Content */}
        <div className="mp3-cutter-main">
          <h1>Online MP3 Cutter Tool</h1>
          <p className="description">
            Trim your MP3 and audio files with millisecond precision. Adjust the start and end points, apply fade effects, and export as MP3, WAV, or ringtone. 100% free and secure.
          </p>

          {/* File Upload Section with Drag & Drop */}
          <div className="file-upload-section">
            <div className="upload-box" onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              handleFileUpload({ target: { files: [file] } });
            }} onDragOver={(e) => e.preventDefault()}>
              <p>Drop audio file here or choose from below</p>
            </div>

            {/* File Source Dropdown */}
            <div className="file-source-dropdown">
              <select onChange={handleFileSourceChange} value={fileSource}>
                <option value="">Select Source</option>
                <option value="googleDrive">Google Drive</option>
                <option value="dropbox">Dropbox</option>
                <option value="url">From URL</option>
              </select>
              {fileSource === 'url' && (
                <div className="url-input">
                  <input
                    type="text"
                    placeholder="Enter URL"
                    onBlur={(e) => handleFileFromURL(e.target.value)}
                  />
                </div>
              )}
            </div>

            <label className="upload-label">
              OR Upload Audio File:
              <input type="file" accept="audio/*" onChange={handleFileUpload} className="upload-input" />
            </label>
          </div>

          {/* Audio Player */}
          {audioFile && (
            <div className="audio-player">
              <audio ref={audioRef} controls src={audioFile}></audio>

              {/* Trim Controls */}
              <div className="trim-controls">
                <label>Start Time (seconds):
                  <input
                    type="number"
                    value={startTime}
                    onChange={(e) => setStartTime(Number(e.target.value))}
                    min="0"
                    max={endTime - 1}
                  />
                </label>
                <label>End Time (seconds):
                  <input
                    type="number"
                    value={endTime}
                    onChange={(e) => setEndTime(Number(e.target.value))}
                    min={startTime + 1}
                  />
                </label>
                <button onClick={handleTrim}>Trim</button>
              </div>
            </div>
          )}

          <button className="export-button" onClick={handleExport}>
            Export Trimmed Audio
          </button>
        </div>

        {/* Ad Space Right */}
        <div className="ad ad-right">Right Ad</div>
      </div>

      {/* Ad Space Bottom */}
      <div className="ad ad-bottom">Your Bottom Ad Here</div>

      {/* Audio Cutter Features Section */}
      <div className="audio-cutter-features">
        <h2>Audio Cutter</h2>
        <p>Trim or cut any audio file online. No special skills are required to use the app. It’s all simple: just upload the file, select a fragment using the sliders, and click "Cut".</p>

        <h3>Fade in and Fade Out</h3>
        <p>The app enables you to make your audio track fade in and fade out smoothly. This is useful when making a phone ringtone.</p>

        <h3>Cut Songs Online</h3>
        <p>With our app, you don’t need to install audio editing software on your computer. You can cut an audio track in a couple of clicks, right in your browser window. Just upload a file, cut the section you want, and save it to your hard drive.</p>

        <h3>All Formats are Supported</h3>
        <p>Our app supports over 300 different formats, and more formats are being added to the list.</p>

        <h3>Create iPhone Ringtones</h3>
        <p>Just one click and the app makes a ringtone for your iPhone, saving the output file in m4r format and making it 40 seconds long so that you can upload it to your phone using iTunes.</p>

        <h3>Extract Sound from a Video</h3>
        <p>Audio Cutter allows you to extract an audio track from a video. This is useful when you want to get a soundtrack from a movie or a music video.</p>

        <h3>How to Trim Audio?</h3>
        <ol>
          <li>Choose file: Select the music file you would like to edit: drag and drop your file, or upload it from your hard drive or cloud storage.</li>
          <li>Adjust intervals: Adjust the start and end of the track by dragging the interval controls or using the arrow keys on your keyboard.</li>
          <li>Download result: Use several features at once if necessary – shift pitch, change volume or speed. Save music into one of the available output formats depending on your needs or preferences.</li>
        </ol>

        <h3>Help</h3>
        <p>A detailed guide on how to trim a song, list of supported formats, and music cutting tips are available here.</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Audio Cutter. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MP3Cutter;
