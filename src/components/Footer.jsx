import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>EveryFreeTool<span>.com</span></h2>
          <p>All tools are free, forever. Built to help you work smarter.</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EveryFreeTool.com — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
