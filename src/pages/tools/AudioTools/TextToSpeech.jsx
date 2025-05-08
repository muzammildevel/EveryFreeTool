import React, { useState, useEffect } from "react";
import "./TextToSpeech.css";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [error, setError] = useState("");

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0) {
          setSelectedVoice(availableVoices[0].name);
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const convertTextToSpeech = () => {
    if (!text) {
      setError("Please enter some text.");
      return;
    }

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voices.find((v) => v.name === selectedVoice);
      utterance.rate = rate;
      utterance.pitch = pitch;
      window.speechSynthesis.speak(utterance);
      setError("");
    } else {
      setError("Text to Speech is not supported in this browser.");
    }
  };

  return (
    <div className="text-to-speech-page">
      <div className="text-to-speech-ad text-to-speech-ad-left">Ad Left</div>
      <div className="text-to-speech-ad text-to-speech-ad-right">Ad Right</div>

      <div className="text-to-speech-container">
        <div className="text-to-speech-ad text-to-speech-ad-top">Ad Top</div>

        <h2 className="text-to-speech-title">🗣️ Text to Speech Converter</h2>

        <label htmlFor="text-input" className="text-to-speech-label">Enter Text:</label>
        <textarea
          id="text-input"
          className="text-to-speech-textarea"
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="text-to-speech-control">
          <label>Voice:</label>
          <select
            className="text-to-speech-select"
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
          >
            {voices.map((voice, index) => (
              <option key={index} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </div>

        <div className="text-to-speech-control">
          <label>Rate: {rate}</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="text-to-speech-control">
          <label>Pitch: {pitch}</label>
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
          />
        </div>

        <button className="text-to-speech-button" onClick={convertTextToSpeech}>
          Convert to Speech
        </button>

        {error && <div className="text-to-speech-error">{error}</div>}

        <div className="text-to-speech-ad text-to-speech-ad-bottom">Ad Bottom</div>
      </div>
    </div>
  );
};

export default TextToSpeech;
