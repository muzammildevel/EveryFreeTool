import React, { useState } from 'react';
import Slider from 'react-slider';
import Select from 'react-select';
import { FaVolumeUp, FaCog, FaFileAudio } from 'react-icons/fa';
import './AudioConverter.css';

const AudioConverter = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isConverting, setIsConverting] = useState(false);
  const [outputFile, setOutputFile] = useState(null);

  const bitrateOptions = [
    { value: '128kbps', label: '128kbps' },
    { value: '192kbps', label: '192kbps' },
    { value: '256kbps', label: '256kbps' },
  ];

  const sampleRateOptions = [
    { value: '44.1kHz', label: '44.1kHz' },
    { value: '48kHz', label: '48kHz' },
  ];

  const channelsOptions = [
    { value: 'mono', label: 'Mono' },
    { value: 'stereo', label: 'Stereo' },
  ];

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleConversion = () => {
    setIsConverting(true);
    setProgress(0);
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setOutputFile(URL.createObjectURL(file)); // Replace with actual conversion logic
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="audio-converter">
      <div className="audio-converter-layout-wrapper">
        {/* Left Ad */}
        <div className="audio-converter-ad-left">Ad Left</div>

        {/* Main Tool Section */}
        <div className="audio-converter-tool">
          <h1>Audio Converter <FaFileAudio /></h1>
          <p>Convert your audio files quickly and easily <FaCog /></p>

          {/* File Upload */}
          <input
            type="file"
            onChange={handleFileUpload}
            accept=".mp3, .wav, .flac, .ogg, .aac, .m4a, .wma"
          />
          {file && <p>{file.name}</p>}

          {/* Conversion Settings */}
          <div className="audio-converter-conversion-options">
            <label>
              Bitrate <FaCog />
              <Select options={bitrateOptions} />
            </label>

            <label>
              Sample Rate <FaCog />
              <Select options={sampleRateOptions} />
            </label>

            <label>
              Channels <FaCog />
              <Select options={channelsOptions} />
            </label>

            <label>
              Volume <FaVolumeUp />
              <Slider
                min={0}
                max={100}
                step={1}
                value={50}
                onChange={(value) => console.log(value)}
                renderTrack={(props, state) => (
                  <div {...props} style={{ backgroundColor: 'grey' }}>
                    <div
                      style={{
                        backgroundColor: '#3778c2',
                        height: '100%',
                        width: `${(state.valueNow / 100) * 100}%`,
                      }}
                    />
                  </div>
                )}
                renderThumb={(props) => (
                  <div {...props} style={{ backgroundColor: '#3778c2', height: 15, width: 15, borderRadius: '50%' }} />
                )}
              />
            </label>

            <label>
              Trim (Start)
              <input type="time" />
            </label>

            <label>
              Trim (End)
              <input type="time" />
            </label>
          </div>

          {/* Convert Button */}
          <button onClick={handleConversion} disabled={isConverting || !file}>
            {isConverting ? 'Converting...' : 'Convert'}
          </button>

          {/* Progress Bar */}
          {isConverting && (
            <div className="audio-converter-progress-bar">
              <div style={{ width: `${progress}%` }} />
            </div>
          )}

          {/* Output Download */}
          {outputFile && (
            <div>
              <a href={outputFile} download>
                Download Converted File
              </a>
            </div>
          )}
        </div>

        {/* Right Ad */}
        <div className="audio-converter-ad-right">Ad Right</div>
      </div>

      {/* Bottom Ad */}
      <div className="audio-converter-ad-bottom">Ad Bottom</div>

      {/* SEO Content */}
      <div className="audio-converter-seo-info">
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
        <p>You can change the track’s name, artist, album, year, and genre. Tags are supported for mp3, ogg, flac, wav.</p>

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
      </div>
    </div>
  );
};

export default AudioConverter;
