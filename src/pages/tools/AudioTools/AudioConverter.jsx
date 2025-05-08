import React, { useState } from 'react';
import './AudioConverter.css';

function AudioConverter() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
    setProgress(0);
  };

  const handleConvert = () => {
    if (files.length === 0) return;
    setProgress(25);
    setTimeout(() => setProgress(100), 1000); // Mock conversion
  };

  return (
    <div className="audio-converter-container">
      <div className="ad-top">Top Ad Placeholder</div>

      <div className="layout-wrapper">
        <div className="ad-left">Left Ad</div>

        <div className="converter-tool">
          <h1>Audio Converter Tool</h1>
          <input type="file" accept="audio/*,video/*" multiple onChange={handleFileChange} />
          
          <div className="conversion-options">
            <label>
              Format
              <select>
                <option>MP3</option>
                <option>WAV</option>
                <option>FLAC</option>
                <option>OGG</option>
                <option>AAC</option>
                <option>M4A</option>
                <option>WMA</option>
              </select>
            </label>
            <label>
              Bitrate
              <select>
                <option>128kbps</option>
                <option>192kbps</option>
                <option>256kbps</option>
                <option>320kbps</option>
              </select>
            </label>
            <label>
              Sample Rate
              <select>
                <option>44.1kHz</option>
                <option>48kHz</option>
              </select>
            </label>
            <label>
              Channels
              <select>
                <option>Stereo</option>
                <option>Mono</option>
              </select>
            </label>
          </div>

          <button onClick={handleConvert} disabled={files.length === 0}>Convert</button>

          {progress > 0 && (
            <div className="progress-bar">
              <div style={{ width: `${progress}%` }}></div>
            </div>
          )}
        </div>

        <div className="ad-right">Right Ad</div>
      </div>

      <div className="ad-bottom">Bottom Ad Placeholder</div>

      <section className="seo-info">
        <h2>Online Audio Converter</h2>
        <p>A free online app that converts audio files for you. The app supports all formats, processes your files quickly, and does not require installation.</p>

        <h3>Convert any format</h3>
        <p>Our converter works with over 300 different file formats including video formats, converting them to mp3, wav, m4a, flac, ogg, amr, mp2, and m4r (for iPhone ringtones).</p>

        <h3>Extract audio from a video file</h3>
        <p>Our app allows you to extract an audio track from a video. It is useful when you want to save a particular song from a movie or a music video.</p>

        <h3>Advanced settings</h3>
        <p>You can configure the quality, bitrate, frequency, and number of channels, apply reverse playback or fade in, or even remove a voice from the audio track.</p>

        <h3>It's safe</h3>
        <p>Your files are automatically deleted from our servers a few hours after you are done working with them. Nobody has access to them except you.</p>

        <h3>Batch conversion</h3>
        <p>The app can convert multiple files simultaneously in a batch, saving them in a ZIP archive to speed up downloading.</p>

        <h3>Tag support</h3>
        <p>You can change the track’s name, artist, album, year and genre. Tags are supported for mp3, ogg, flac, wav.</p>

        <h3>Works in a browser</h3>
        <p>Now you can convert audio tracks right in your browser. It’s fast, secure, and free.</p>

        <h3>Convert audio easily</h3>
        <p>The app is easy to use: upload the original file, choose your desired format and quality, and download the output file to your computer.</p>

        <h3>Help</h3>
        <ul>
          <li>Different types of audio formats explained</li>
          <li>How to extract sound from a video?</li>
          <li>Advanced mp3 converting settings explained</li>
        </ul>
      </section>
    </div>
  );
}

export default AudioConverter;
