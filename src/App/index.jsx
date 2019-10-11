import { connect } from 'react-redux';

import { load } from 'actions/app';
import Container from './Container';

const mapStateToProps = state => ({
  seats: state.app.seats || [],
  loading: state.app.loading,
});

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(load()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
