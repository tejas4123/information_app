import React from 'react';

function LocationInfo({ location, error, loading, onClear }) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!location) {
    return null;
  }
  
  return (
    <div>
      <h2>Location Information</h2>
      {location && (
        <div>
          <p>Post code : {location["post code"]}</p>
          <p>Country: {location.country}</p>
          <p>country abbreviation : {location["country abbreviation"]}</p>
          <ul>
              {location.places.map((place, placeIndex) => (
                <li key={placeIndex}>
                  <p>Place Name: {place["place name"]}</p>
                  <p>Longitude: {place.longitude}</p>
                  <p>state: {place.state}</p>
                  <p>state Abbreviation: {place["state abbreviation"]}</p>
                  <p>Latitude : {place["latitude"]}</p>
                </li>
              ))}
            </ul>
            
        </div>
      )}
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default LocationInfo;
