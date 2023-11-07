import React, { useState } from 'react';
import axios from 'axios';

function ZipCodeForm({ onZipCodeSubmit,  }) {
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
    <div className="max-w-[1170px] mx-auto sm:py-[18vh] py-[18vh] text-center">
        <h1 className="text-white sm:text-[60px] text-[35px] font-bold">
          Find Your Location
        </h1>
        <h4 className="text-white text-[25px] sm:py-[20px] py-[10px]">
          By Your Pincode
        </h4>
        {/* search section  */}
        <div className="max-w-[700px] mx-auto sm:px-[10px] px-[40px] mt-[30px] text-white">
          <form className="grid sm:grid-cols-[70%_auto] grid-cols-1 gap-[20px]" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Your Pincode"
              className="border-[1px]  pl-[20px] h-[50px] border-[#ccc] bg-[transparent]"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            ></input>
            <button type='submit' className="bg-[red] rounded-[5px] sm:p-[7px_20px] p-[5px_15px] py-[15px] ">
              Find Out
            </button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
          </form>
        </div>
      </div>
  );
}

export default ZipCodeForm;
