export const setLocation = (location) => ({
    type: 'SET_LOCATION',
    payload: location,
  });
  
  export const setError = (error) => ({
    type: 'SET_ERROR',
    payload: error,
  });
  
  export const setLoading = (loading) => ({
    type: 'SET_LOADING',
    payload: loading,
  });
  
  export const clearData = () => ({
    type: 'CLEAR_DATA',
  });
  