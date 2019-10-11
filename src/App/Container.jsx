import React from 'react';

import View from './View';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  UNSAFE_componentWillMount() {
    this.props.load();
  }

  render = () => (
    <View {...this.props} />
  );
}

export default App;
