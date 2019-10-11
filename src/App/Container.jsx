import React from 'react';

import View from './View';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choosingList: [],
      total: 0,
    };
  }

  UNSAFE_componentWillMount() {
    this.props.load();
  }

  choose = (position, empty, price) => {
    const { choosingList, total } = this.state;
    if (choosingList.indexOf(position) < 0) {
      if (empty && choosingList.length < 6) {
        this.setState({
          choosingList: [...choosingList, position],
          total: total + price,
        });
      }
    } else {
      this.setState({
        choosingList: choosingList.filter(i => i !== position),
        total: total - price,
      });
    }
  }

  zoomOut = () => {

  }

  zoomIn = () => {

  }

  render = () => (
    <View {...this.props} {...this.state}
      choose={this.choose}
      zoomOut={this.zoomOut} zoomIn={this.zoomIn}
    />
  );
}

export default App;
