import React from 'react';
import Card from '../Card/Card';

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

  let loc = location["post code"];
  let coun = location.country;
  let abb = location["country abbreviation"];
  
  return (
    // <Card>
    //   <h2>Location Information</h2>
    //   {location && (
    //     <div>
    //       <p>Post code : {location["post code"]}</p>
    //       <p>Country: {location.country}</p>
    //       <p>country abbreviation : {location["country abbreviation"]}</p>
    //       <ul>
    //           {location.places.map((place, placeIndex) => (
    //             <li key={placeIndex}>
    //               <p>Place Name: {place["place name"]}</p>
    //               <p>Longitude: {place.longitude}</p>
    //               <p>state: {place.state}</p>
    //               <p>state Abbreviation: {place["state abbreviation"]}</p>
    //               <p>Latitude : {place["latitude"]}</p>
    //             </li>
    //           ))}
    //         </ul>
            
    //     </div>
    //   )}
    //   <button onClick={onClear}>Clear</button>
    // </Card>

    <div className="max-w-[1170px] mx-auto sm:p-7 p-4 text-white">
      {/* information Section */}
      <div>
        <h3 className="font-semibold sm:text-xl">
          Location According to PIncode:
        </h3>
      </div>
      {/* location Card */}
      <main className="grid lg:grid-cols-3 gap-6 py-8 ">
        {location && location.places.map((place, placeIndex) => (
         <div className="shadow-lg shadow-white rounded-lg p-5 bg-[#689850]">
         <div className='text-center'>
            <h2 className="font-poppins text-2xl font-semibold py-2">{coun}</h2>
          </div>
            <ul className='p-2'>
              <li key={placeIndex}>
              <h3> {place["place name"]}</h3>
              <h3>{place.state}</h3>
               

              </li>
             </ul>
        </div>))}
        {/* ))} */}
      </main>
    </div>
  );
}

export default LocationInfo;
