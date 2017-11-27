import { connect } from 'react-redux';
import { get } from 'lodash';
import Home from '../components/Home';
import { HomeUpdateCardTypeAction } from './state/actions';
import { initState as homeInitState } from './state/reducers';
/* eslint-disable no-console */
const mapStateToProps = (state) => {
    return {
        registerCard: {
            ...get(state, 'home.registerCard', homeInitState.registerCard)
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        homeUpdateCardType: (value) => dispatch(HomeUpdateCardTypeAction(value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
