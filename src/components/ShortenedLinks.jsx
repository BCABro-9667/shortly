import React, { useState } from 'react';
import '../styles/ShortenedLinks.css';

const ShortenedLinks = ({ links }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (links.length === 0) return null;

  return (
    <div className="shortened-links">
      {links.map((link, index) => (
        <div key={index} className="shortened-link">
          <div className="original-url">{link.original}</div>
          <div className="shortened-url-container">
            <a href={link.shortened} target="_blank" rel="noopener noreferrer" className="shortened-url">
              {link.shortened}
            </a>
            <button
              onClick={() => handleCopy(link.shortened, index)}
              className={`copy-btn ${copiedIndex === index ? 'copied' : ''}`}
            >
              {copiedIndex === index ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortenedLinks;