import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ShortenerForm.css';

const ShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!url.trim()) {
      setError('Please add a link');
      return;
    }
  
    try {
      setIsLoading(true);
      setError('');
  
      const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
  
      onShorten(url, response.data); // response.data is the shortened link
      setUrl('');
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
      console.error('Error shortening URL:', err.response || err.message || err);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="shortener-form-container">
      <form onSubmit={handleSubmit} className={`shortener-form ${error ? 'error' : ''}`}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={error ? 'error' : ''}
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Shortening...' : 'Shorten It!'}
        </button>
      </form>
    </div>
  );
};

export default ShortenerForm;