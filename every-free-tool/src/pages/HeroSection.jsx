import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [usersToday, setUsersToday] = useState(0);
  const [toolsUsed, setToolsUsed] = useState(0);
  const [toolsAvailable, setToolsAvailable] = useState(0);
  const taglines = [
    "One platform. Unlimited possibilities. 100% free tools with no signups.",
    "100% Free tools, no fees. Access anytime, anywhere.",
    "Save time and money with EveryFreeTool.com. No registration required.",
    "Experience tools that are paid everywhere else for free here."
  ];

  const [currentTagline, setCurrentTagline] = useState("");
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[taglineIndex];
    const speed = isDeleting ? 50 : 80;

    const type = () => {
      setCurrentTagline(current.substring(0, charIndex));
      if (!isDeleting && charIndex < current.length) {
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(prev => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setIsDeleting(false);
          setTaglineIndex((taglineIndex + 1) % taglines.length);
        }
      }
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, taglineIndex]);

  useEffect(() => {
    setUsersToday(Math.floor(Math.random() * 10000) + 1000);
    setToolsUsed(Math.floor(Math.random() * 50000) + 1000);
    setToolsAvailable(Math.floor(Math.random() * 50) + 5);
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title">🚀 EveryFreeTool.com</h1>
        <p className="hero-subtitle">
          <span className="typing">{currentTagline}</span><span className="cursor">|</span>
        </p>

        <div className="stats-bar">
          <div className="stat-box">👥 <strong>{usersToday}</strong> Users Today</div>
          <div className="stat-box">🛠 <strong>{toolsUsed}</strong> Tools Used</div>
          <div className="stat-box">📈 <strong>{toolsAvailable}</strong> Tools Available</div>
        </div>

        <div className="how-it-works">
          <h2>🛠 How It Works</h2>
          <div className="step-boxes">
            <div className="step-box"><h3>📥 Pick a Tool</h3><p>Choose from Audio, Image, Video and more.</p></div>
            <div className="step-box"><h3>🔧 Upload or Enter</h3><p>Upload your file or input your data.</p></div>
            <div className="step-box"><h3>⚡ Instant Results</h3><p>Get results in seconds, no wait.</p></div>
            <div className="step-box"><h3>✔️ No Fees</h3><p>Completely free. No sign-ups needed.</p></div>
            <div className="step-box"><h3>💾 Save Tools</h3><p>Save your favorite tools in browser.</p></div>
            <div className="step-box"><h3>🚀 Since 2025</h3><p>Free tools from 2025 onward forever.</p></div>
            <div className="step-box"><h3>💡 Easy to Use</h3><p>No learning curve—just start using.</p></div>
            <div className="step-box"><h3>💸 Exclusive Tools</h3><p>Use tools not found anywhere else.</p></div>
            <div className="step-box"><h3>🌐 Use Anywhere</h3><p>Fully web-based. Works on any device.</p></div>
          </div>
        </div>

        <Link to="/" className="cta-button">Explore All Tools →</Link>
      </div>

      <div className="ad-banner">📢 Ad Space - Promote Your Brand Here</div>
    </div>
  );
};

export default HeroSection;
