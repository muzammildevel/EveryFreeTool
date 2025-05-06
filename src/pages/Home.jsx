import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import './Home.css';
import HeroSection from "./HeroSection";

function Home() {
  return (
    <>
      <main>
        {/* SEO Meta Tags */}
        <Helmet>
          <title>EveryFreeTool.com – Free Online Tools for Everyone</title>
          <meta
            name="description"
            content="Access free online tools like audio converters, image resizers, PDF editors, and currency converters. Simple, fast, and free – EveryFreeTool.com."
          />
          <meta
            name="keywords"
            content="free online tools, audio converter, mp3 cutter, image resizer, image compressor, background remover, pdf to word, word counter, video to mp3, youtube downloader, currency converter, IP to location"
          />
        </Helmet>

        {/* Top Advertisement */}
        <div className="ad-slot ad-top">
          {/* Example placeholder – Replace with ad code */}
          <div style={{ background: "#ccc", padding: "10px" }}>Top Ad Banner</div>
        </div>

        <div><HeroSection /></div>

        {/* Content with Left and Right Ads */}
        <div className="content-with-sides">
          {/* Left Advertisement */}
          <aside className="ad-slot ad-left">
            <div style={{ background: "#ddd", height: "600px", width: "160px" }}>Left Side Ad</div>
          </aside>


          {/* Main Page Content */}
          <div className="main-content">
            <header>
              <h1>EveryFreeTool.com – Free Online Tools for Everyone</h1>
              <p>
                Discover the most popular free online tools to enhance your productivity. Convert audio, resize images, edit PDFs, and more – all for free.
              </p>
            </header>

            {/* Audio Tools */}
            <section id="audio-tools">
              <h2>🎧 Audio Tools</h2>
              <p>At EveryFreeTool.com, we offer a complete suite of free audio tools designed to simplify your audio editing and conversion tasks. With our Audio Converter, you can quickly convert audio files between various formats, including MP3, WAV, and more. Our MP3 Cutter tool helps you trim your audio files with precision, whether you're looking to remove unwanted parts or create the perfect ringtone. Additionally, the Text-to-Speech tool allows you to convert written text into spoken words, ideal for creating audio content from articles, essays, or other written materials. No matter your audio needs, these free tools ensure a seamless and efficient experience.</p>
              <ul>
                <li><Link to="/tools/audio">All Audio Tools</Link></li>
                <li><Link to="/tools/audio/audio-converter">Audio Converter</Link></li>
                <li><Link to="/tools/audio/text-to-speech">Text to Speech</Link></li>
                <li><Link to="/tools/audio/mp3-cutter">MP3 Cutter</Link></li>
              </ul>
            </section>

            {/* Image Tools */}
            <section id="image-tools">
              <h2>🖼️ Image Tools</h2>
              <p>Enhance and optimize your images with EveryFreeTool.com’s collection of free image tools. Our Image Resizer helps you adjust the dimensions of your images, whether you're preparing them for social media, a website, or print. With the Image Compressor, you can reduce the file size of your images without losing quality, ensuring faster loading times and better performance. The Background Remover tool allows you to effortlessly remove backgrounds from your images, creating clean, professional results perfect for product photos, profile pictures, and more. Additionally, our JPG to PNG tool makes it easy to convert your images into the desired format. With these free and powerful tools, you can take your image editing to the next level with ease.</p>
              <ul>
                <li><Link to="/tools/image">All Image Tools</Link></li>
                <li><Link to="/tools/image/image-resizer">Image Resizer</Link></li>
                <li><Link to="/tools/image/image-compressor">Image Compressor</Link></li>
                <li><Link to="/tools/image/background-remover">Background Remover</Link></li>
                <li><Link to="/tools/image/jpg-to-png">JPG to PNG</Link></li>
              </ul>
            </section>

            {/* Document Tools */}
            <section id="document-tools">
              <h2>📄 Document Tools</h2>
              <p>Simplify document management with EveryFreeTool.com’s comprehensive free document tools. Use our PDF to Word Converter to effortlessly convert PDF files into editable Word documents, making it easier to edit, format, and reuse content. Need to merge multiple documents? Our Merge PDF Tool allows you to combine multiple PDF files into one, perfect for organizing your files into a single, easy-to-read document. Additionally, our Split PDF Tool helps you break large PDFs into smaller, more manageable pieces. Whether you're dealing with PDFs, Word files, or other document types, our free tools streamline your document workflow and make your tasks easier.</p>
              <ul>
                <li><Link to="/tools/document">All Document Tools</Link></li>
                <li><Link to="/tools/document/pdf-to-word">PDF to Word Converter</Link></li>
              </ul>
            </section>

            {/* Text Tools */}
            <section id="text-tools">
              <h2>✍️ Text Tools</h2>
              <p>Boost your productivity with EveryFreeTool.com’s free text tools designed to help you manage, analyze, and transform your text. The Word Counter tool counts the number of words, characters, and sentences in your text, helping you stay within writing limits and improve your content’s readability. Use the Text Case Converter to change the case of your text to uppercase, lowercase, or title case in just a click. The Text Analyzer provides an in-depth analysis of your text, including word frequency, readability scores, and other metrics that help improve your writing. These tools are perfect for writers, students, and marketers who need to quickly refine and optimize their text.</p>
              <ul>
                <li><Link to="/tools/text">All Text Tools</Link></li>
                <li><Link to="/tools/text/word-counter">Word Counter</Link></li>
              </ul>
            </section>

            {/* Video Tools */}
            <section id="video-tools">
              <h2>🎥 Video Tools</h2>
              <p>Edit, convert, and download videos with ease using EveryFreeTool.com’s free video tools. Our Video to MP3 Converter allows you to extract audio from videos, converting them to MP3 format so you can listen to your favorite content offline. The YouTube Downloader lets you download videos from YouTube in various formats and resolutions, so you can save videos for later viewing. Additionally, our Video Resizer tool helps you adjust video dimensions, making it ideal for sharing content on different platforms. Whether you're a content creator, student, or casual user, these free tools make video management easy and accessible.</p>
              <ul>
                <li><Link to="/tools/video">All Video Tools</Link></li>
                <li><Link to="/tools/video/video-to-mp3">Video To MP3</Link></li>
                <li><Link to="/tools/video/youtube-downloader">YouTube Downloader</Link></li>
              </ul>
            </section>

            {/* Finance Tools */}
            <section id="finance-tools">
              <h2>💰 Finance Tools</h2>
              <p>Manage your finances more efficiently with EveryFreeTool.com’s free finance tools. Our Currency Converter provides accurate, real-time exchange rates for over 150 currencies, making it easier to convert currencies for travel, business, or personal use. The Loan Calculator helps you calculate your monthly payments, interest rates, and the total cost of loans, whether you’re looking at a mortgage, auto loan, or personal loan. Additionally, our Investment Calculator helps you estimate returns on your investments based on your input variables. These free tools are perfect for anyone looking to manage their finances, make smarter investment decisions, or plan for major purchases.</p>
              <ul>
                <li><Link to="/tools/finance">All Finance Tools</Link></li>
                <li><Link to="/tools/finance/currency-converter">Currency Converter</Link></li>
              </ul>
            </section>

            {/* Web Tools */}
            <section id="web-tools">
              <h2>🌐 Web Tools</h2>
              <p>Optimize your web experience with EveryFreeTool.com’s suite of free web tools. Our IP to Location tool allows you to trace the geographical location of any IP address, which is useful for understanding user demographics or enhancing website security. Use our Website Speed Test to check the loading times of your website, ensuring a fast and efficient experience for your visitors. Additionally, our SEO Analyzer helps you assess the SEO health of your website by providing insights into areas such as keyword usage, meta descriptions, and link quality. These tools help web developers, marketers, and business owners manage their online presence more effectively and efficiently.</p>
              <ul>
                <li><Link to="/tools/web">All Web Tools</Link></li>
                <li><Link to="/tools/web/ip-to-location">IP To Location</Link></li>
              </ul>
            </section>
          </div>

          {/* Right Advertisement */}
          <aside className="ad-slot ad-right">
            <div style={{ background: "#ddd", height: "600px", width: "160px" }}>Right Side Ad</div>
          </aside>
        </div>

        {/* Bottom Advertisement */}
        <div className="ad-slot ad-bottom">
          <div style={{ background: "#ccc", padding: "10px" }}>Bottom Ad Banner</div>
        </div>
      </main>
    </>
  );
};

export default Home;
