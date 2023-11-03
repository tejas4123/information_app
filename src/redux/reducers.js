const initialState = {
    location: null,
    error: null,
    loading: false,
  };
  
  const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOCATION':
        return { ...state, location: action.payload, loading: false, error: null };
  
      case 'SET_ERROR':
        return { ...state, error: action.payload, loading: false, location: null };
  
      case 'SET_LOADING':
        return { ...state, loading: action.payload, location: null, error: null };
  
      case 'CLEAR_DATA':
        return { ...state, location: null, error: null, loading: false };
  
      default:
        return state;
    }
  };
  
  export default appReducer;
  