import React, { useState } from "react";
import "./YouTubeDownloader.css";

const YouTubeDownloader = () => {
  const [url, setUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleURLChange = (e) => {
    setUrl(e.target.value);
    setDownloadLink(null);
    setError("");
  };

  const downloadVideo = () => {
    if (!url) {
      setError("Please enter a YouTube video URL.");
      return;
    }

    setLoading(true);
    setError("");

    setTimeout(() => {
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        setDownloadLink("https://example.com/sample-video.mp4");
      } else {
        setError("Invalid YouTube URL. Please check the URL and try again.");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="youtube-downloader-wrapper">
      <div className="youtube-downloader-ad youtube-downloader-ad-top">Top Ad</div>

      <div className="youtube-downloader-main">
        <div className="youtube-downloader-ad youtube-downloader-ad-left">Left Ad</div>

        <div className="youtube-downloader-tool">
          <h2 className="youtube-downloader-title">YouTube Video Downloader</h2>

          <div className="youtube-downloader-input-container">
            <label htmlFor="url">Enter YouTube Video URL:</label>
            <input
              id="url"
              type="text"
              className="youtube-downloader-input"
              value={url}
              onChange={handleURLChange}
              placeholder="Paste YouTube URL here"
            />
          </div>

          <button
            onClick={downloadVideo}
            disabled={loading}
            className="youtube-downloader-button"
          >
            {loading ? "Downloading..." : "Download Video"}
          </button>

          {error && <div className="youtube-downloader-error">{error}</div>}

          {downloadLink && (
            <div className="youtube-downloader-result">
              <h3>Download Link:</h3>
              <a href={downloadLink} download>
                <button className="youtube-downloader-download-btn">Download MP4</button>
              </a>
            </div>
          )}
        </div>

        <div className="youtube-downloader-ad youtube-downloader-ad-right">Right Ad</div>
      </div>

      <div className="youtube-downloader-ad youtube-downloader-ad-bottom">Bottom Ad</div>
    </div>
  );
};

export default YouTubeDownloader;
