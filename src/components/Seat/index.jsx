import React from 'react';
import T from 'prop-types';

import './styles.css';

const Seat = ({ type, position, empty, choose, choosing, price }) => (
  <div
    className={`seat ${type} ${empty ? '' : 'choosed'} ${choosing ? 'choosing' : ''}`}
    onClick={() => choose({ position, empty, price, type })}
  >
    {position}
  </div >
);

Seat.propTypes = {
  type: T.oneOf([
    'standard',
    'vip',
    'deluxe',
  ]),
  choose: T.func,
  position: T.string.isRequired,
  empty: T.bool.isRequired,
  choosing: T.bool,
  price: T.number.isRequired,
};

Seat.defaultProps = {
  type: 'standard',
  choose: () => { },
  choosing: false,
};

export default Seat;
