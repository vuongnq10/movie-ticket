const initialState = {
  seats: [],
  loading: false,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'LOADED':
      return {
        ...state,
        ...action.data,
        loading: false,
      }
    default:
      return state;
  }
};

export default app;
