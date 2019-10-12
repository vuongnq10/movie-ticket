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

export const pay = (tickets, total) => {
  return (dispatch, getState) => {
    const { seats } = getState().app;
    const newSeats = seats.map(row => {
      const newRows = row.map(cell => {
        if (tickets.indexOf(cell.position) > -1) {
          return {
            ...cell,
            empty: false,
          };
        }
        return cell;
      });
      return newRows;
    });

    dispatch({
      type: 'LOADED',
      data: {
        seats: newSeats,
      },
    });
  }
}