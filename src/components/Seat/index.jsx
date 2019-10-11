import React from 'react';
import T from 'prop-types';

import './styles.css';

const Seat = ({ type }) => (
  <div className={`seat ${type}`} />
);

Seat.propTypes = {
  type: T.oneOf([
    'standard',
    'vip',
    'deluxe',
  ]),
};

Seat.defaultProps = {
  type: 'standard',
};

export default Seat;
