import React, { useState } from "react";
import "./VideoToMP3.css";

const VideoToMP3 = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const convertToMP3 = () => {
    if (!videoFile) return;

    alert("Video to MP3 conversion is in progress (server-side logic needed).");

    setTimeout(() => {
      setConvertedFile("https://example.com/converted-audio.mp3");
    }, 2000);
  };

  return (
    <div className="video-to-mp3-wrapper">
      <div className="video-to-mp3-ad video-to-mp3-ad-top">Top Ad</div>
      <div className="video-to-mp3-main">
        <div className="video-to-mp3-ad video-to-mp3-ad-left">Left Ad</div>

        <div className="video-to-mp3-tool">
          <h2 className="video-to-mp3-title">Video to MP3 Converter</h2>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="video-to-mp3-input"
          />
          <button onClick={convertToMP3} className="video-to-mp3-button">
            Convert Video to MP3
          </button>

          {convertedFile && (
            <div className="video-to-mp3-result">
              <h3>Converted MP3 File:</h3>
              <audio controls>
                <source src={convertedFile} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
              <a href={convertedFile} download="converted-audio.mp3">
                <button className="video-to-mp3-download-btn">Download MP3</button>
              </a>
            </div>
          )}
        </div>

        <div className="video-to-mp3-ad video-to-mp3-ad-right">Right Ad</div>
      </div>
      <div className="video-to-mp3-ad video-to-mp3-ad-bottom">Bottom Ad</div>
    </div>
  );
};

export default VideoToMP3;
