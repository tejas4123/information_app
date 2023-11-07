import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setLocation, setError, setLoading, clearData } from './redux/actions';
import ZipCodeForm from './Components/ZipCodeForm';
import LocationInfo from './Components/LocationInfo';


function App() {
  const [location , setLocation] = useState(null);
  // const [error, setError] = useState(null);
  const [show , setShow]= useState(true);

  const fetchLocationInfo = (data) => {
    
    setLocation(data);
    setShow(false);
  };

  const clearData = () => {
    setLocation(null);
  }


  return (
    
    <section className="w-[100%] min-h-[100vh] font-poppins  bg-[url('https://images.unsplash.com/photo-1508885368104-a4871600f1e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover">
      <div className="w-[100%] min-h-[100vh] bg-[rgba(0,0,0,0.7)]">
        <header className="max-w-[1170px] mx-auto sm:p-4  py-4">
          <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center">
            <figure>
              <a
                href="#"
                className="text-white sm:text-5xl text-4xl font-semibold"
              >
                ZipCode
              </a>
            </figure>
            <div className="flex text-white sm:gap-[16px] gap-[10px] justify-end items-center">
              <button className="bg-black text-white border-[1px] border-white sm:p-[7px_20px] p-[5px_15px] rounded-[5px]">
                Location
              </button>
              <a className="bg-[red] rounded-[5px] sm:p-[7px_20px] p-[5px_15px]">
                Sign In
              </a>
            </div>
          </div>
        </header>

        {show&&<ZipCodeForm onZipCodeSubmit={fetchLocationInfo}/>}
        {/* <Front /> */}
        {!show && <LocationInfo location={location} onClear={clearData} />}
    </div>
    
    </section>
  )
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
