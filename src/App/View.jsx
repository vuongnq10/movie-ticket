import React from 'react';
import T from 'prop-types';

import Seat from 'components/Seat';
import Spinner from 'components/Spinner';

import './styles.css';

const View = ({ seats, loading }) => (
  <div className="container">
    {loading && <Spinner />}
    <div className="cinema">
      {seats.map((row, index) => (
        <div key={index}>
          {row.map(cell => <Seat {...cell} key={cell.position} />)}
        </div>
      ))}
    </div>
  </div>
);

View.propTypes = {
  seats: T.arrayOf(T.arrayOf(T.shape({}))).isRequired,
  loading: T.bool.isRequired,
};

export default View;
