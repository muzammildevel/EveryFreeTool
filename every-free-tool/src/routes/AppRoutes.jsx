import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// Import Tools
import AudioTools from "../pages/tools/AudioTools/AudioTools.jsx"; // Audio Tools
import ImageTools from "../pages/tools/ImageTools/ImageTools.jsx"; // Image Tools
import DocumentTools from "../pages/tools/DocumentTools/DocumentTools.jsx"; // Document Tools
import TextTools from "../pages/tools/TextTools/TextTools.jsx"; // Text Tools
import VideoTools from "../pages/tools/VideoTools/VideoTools.jsx"; // Video Tools
import FinanceTools from "../pages/tools/FinanceTools/FinanceTools.jsx"; // Finance Tools
import WebTools from "../pages/tools/WebTools/WebTools.jsx"; // Web Tools

// Import individual tool pages:-

// Audio Tool Pages
import AudioConverter from "../pages/tools/AudioTools/AudioConverter.jsx";
import MP3Cutter from "../pages/tools/AudioTools/MP3Cutter.jsx";
import TextToSpeech from "../pages/tools/AudioTools/TextToSpeech.jsx";

// Image Tool Pages
import ImageResizer from "../pages/tools/ImageTools/ImageResizer.jsx";
import ImageCompressor from "../pages/tools/ImageTools/ImageCompressor.jsx";
import BackgroundRemover from "../pages/tools/ImageTools/BackgroundRemover.jsx";
import JPGToPNG from "../pages/tools/ImageTools/JPGToPNG.jsx"

// Document Tool Pages
import PdfToWordConverter from "../pages/tools/DocumentTools/PDFToWord.jsx";

// Text Tool Pages
import WordCounter from "../pages/tools/TextTools/WordCounter.jsx";

// Video Tool Pages
import VideoToMP3 from "../pages/tools/VideoTools/VideoToMP3.jsx";
import YouTubeDownloader from "../pages/tools/VideoTools/YouTubeDownloader.jsx";

// Finance Tool Pages
import CurrencyConverter from "../pages/tools/FinanceTools/CurrencyConverter.jsx";

// Web Tool Pages
import IPToLocation from "../pages/tools/WebTools/IPToLocation.jsx";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    {/* Audio Tools */}
    <Route path="/tools/audio" element={<AudioTools />} />
    <Route path="/tools/audio/audio-converter" element={<AudioConverter />} />
    <Route path="/tools/audio/text-to-speech" element={<TextToSpeech />} />
    <Route path="/tools/audio/mp3-cutter" element={<MP3Cutter />} />

    {/* Image Tools */}
    <Route path="/tools/image" element={<ImageTools />} />
    <Route path="/tools/image/image-resizer" element={<ImageResizer />} />
    <Route path="/tools/image/image-compressor" element={<ImageCompressor />} />
    <Route path="/tools/image/background-remover" element={<BackgroundRemover />} />
    <Route path="/tools/image/jpg-to-png" element={<JPGToPNG />} />

    {/* Document Tools */}
    <Route path="/tools/document" element={<DocumentTools />} />
    <Route path="/tools/document/pdf-to-word" element={<PdfToWordConverter />} />

    {/* Text Tools */}
    <Route path="/tools/text" element={<TextTools />} />
    <Route path="/tools/text/word-counter" element={<WordCounter />} />

    {/* Video Tools */}
    <Route path="/tools/video" element={<VideoTools />} />
    <Route path="/tools/video/video-to-mp3" element={<VideoToMP3 />} />
    <Route path="/tools/video/youtube-downloader" element={<YouTubeDownloader />} />

    {/* Finance Tools */}
    <Route path="/tools/finance" element={<FinanceTools />} />
    <Route path="/tools/finance/currency-converter" element={<CurrencyConverter />} />

    {/* Web Tools */}
    <Route path="/tools/web" element={<WebTools />} />
    <Route path="/tools/web/ip-to-location" element={<IPToLocation />} />
  </Routes>
);

export default AppRoutes;
