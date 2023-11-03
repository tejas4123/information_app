import React, { useState } from 'react';
import axios from 'axios';

function ZipCodeForm({ onZipCodeSubmit }) {
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.zippopotam.us/IN/${zipCode}`);
      onZipCodeSubmit(response.data); 
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button type="submit">Submit</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
    </form>
  );
}

export default ZipCodeForm;
