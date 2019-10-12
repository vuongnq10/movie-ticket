import { connect } from 'react-redux';

import { load, pay } from 'actions/app';
import Container from './Container';

const mapStateToProps = state => ({
  seats: state.app.seats || [],
  loading: state.app.loading,
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(load()),
  pay: (tickets, total) => dispatch(pay(tickets, total)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
