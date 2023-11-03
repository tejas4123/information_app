import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setLocation, setError, setLoading, clearData } from './redux/actions';
import ZipCodeForm from './Components/ZipCodeForm';
import LocationInfo from './Components/LocationInfo';

function App() {
  const [location , setLocation] = useState(null);
  // const [error, setError] = useState(null);

  const fetchLocationInfo = (data) => {
    
    setLocation(data);
  };

  const clearData = () => {
    setLocation(null);
  }


  return (
    <div className="App">
      <h1>Zip Code Information App</h1>
      <ZipCodeForm onZipCodeSubmit={fetchLocationInfo}  />
      <LocationInfo location={location}  onClear={clearData} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.app.location,
    error: state.app.error,
    loading: state.app.loading,
  };
};

const mapDispatchToProps = {
  setLocation,
  setError,
  setLoading,
  clearData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
