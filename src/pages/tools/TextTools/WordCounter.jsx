import React, { useState } from "react";
import "./WordCounter.css";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    const words = inputText.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);

    const characters = inputText.replace(/\s+/g, "");
    setCharCount(characters.length);

    const paragraphs = inputText.split(/\n+/).filter(Boolean);
    setParagraphCount(paragraphs.length);
  };

  return (
    <div className="word-counter-wrapper">
      <div className="word-counter-ad word-counter-ad-top">Top Ad</div>
      <div className="word-counter-main">
        <div className="word-counter-ad word-counter-ad-left">Left Ad</div>

        <div className="word-counter-tool">
          <h2 className="word-counter-title">Word Counter Tool</h2>
          <label htmlFor="word-counter-textarea" className="word-counter-label">
            Enter your text:
          </label>
          <textarea
            id="word-counter-textarea"
            value={text}
            onChange={handleTextChange}
            rows="10"
            className="word-counter-textarea"
            placeholder="Type or paste text here..."
          />

          <div className="word-counter-results">
            <p><strong>Words:</strong> {wordCount}</p>
            <p><strong>Characters (no spaces):</strong> {charCount}</p>
            <p><strong>Paragraphs:</strong> {paragraphCount}</p>
          </div>
        </div>

        <div className="word-counter-ad word-counter-ad-right">Right Ad</div>
      </div>
      <div className="word-counter-ad word-counter-ad-bottom">Bottom Ad</div>
    </div>
  );
};

export default WordCounter;
