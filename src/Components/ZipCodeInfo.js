import React, { useState } from 'react';

function ZipCodeForm({ onZipCodeSubmit }) {
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onZipCodeSubmit(zipCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Zip Code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ZipCodeForm;
