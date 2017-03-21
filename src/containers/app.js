import App from '../components/app';
import {connect} from 'react-redux';
import store from '../stores/store';

const mapStateToProps = (state) => {
    return state.activity;
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
