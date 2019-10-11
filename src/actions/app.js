import data from './data.json';

export const load = () => {
  return dispatch => {
    dispatch({ type: 'LOADING' });
    setTimeout(() => dispatch({
      type: 'LOADED',
      data: {
        seats: data,
      },
    }), 3000);
  }
}