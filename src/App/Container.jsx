import React from 'react';
import T from 'prop-types';

import View from './View';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choosingList: [],
      seatType: {
        standard: 0,
        vip: 0,
        deluxe: 0,
      },
      total: 0,
      scale: 1,
    };
  }

  UNSAFE_componentWillMount() {
    this.props.load();
  }

  choose = ({ position, empty, price, type }) => {
    const { choosingList, total, seatType } = this.state;
    if (choosingList.indexOf(position) < 0) {
      if (empty && choosingList.length < 6) {
        this.setState({
          choosingList: [...choosingList, position],
          total: total + price,
          seatType: {
            ...seatType,
            [type]: seatType[type] + 1,
          },
        });
      }
    } else {
      this.setState({
        choosingList: choosingList.filter(i => i !== position),
        total: total - price,
        seatType: {
          ...seatType,
          [type]: seatType[type] - 1,
        },
        // ...{ seatType: { [type]: seatType[type] - 1 > 0 ? seatType[type] - 1 : 0 } },
      });
    }
  }

  zoomOut = () => {
    const { scale } = this.state;
    if (scale < 2) {
      this.setState({ scale: scale + 0.1 });
    }
  }

  zoomIn = () => {
    const { scale } = this.state;
    if (scale > 1) {
      this.setState({ scale: scale - 0.1 });
    }
  }

  pay = () => {
    const { choosingList, total } = this.state;
    this.props.pay(choosingList, total);
    this.setState({
      choosingList: [],
      total: 0,
    });
  }

  render = () => (
    <View {...this.props} {...this.state}
      choose={this.choose}
      zoomOut={this.zoomOut} zoomIn={this.zoomIn}
      pay={this.pay}
    />
  );
}

App.propTypes = {
  pay: T.func.isRequired,
  load: T.func.isRequired,
};

export default App;
