import { connect } from 'react-redux';
import React from 'react';
import { withServiceApi } from 'group-digital-wealth-api-client';
import { Transition } from 'group-digital-wealth-router';
import Search from '../components/Search';
import configureApi from '../services/configureApi';
import {
    searchAcceptCustomAction,
    searchAcceptSetOperateFinshedAction
} from './state/actions';

const mapStateTopProps = (state) => {
    return {
        searchResult: state.search.searchResult,
        acceptCustomID: state.search.acceptCustomID,
        lastFreshData: state.search.lastFreshData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchAcceptCustom: (value) => dispatch(searchAcceptCustomAction(value)),
        searchAcceptSetOperateFinshed: (value) => dispatch(searchAcceptSetOperateFinshedAction(value))
    };
};

const SearchContainer = connect(
    mapStateTopProps,
    mapDispatchToProps
)(Search);
const TransitionComponent = (<Transition caption={'Loading Data'} />);
export default withServiceApi(SearchContainer, 'SEARCH_SVC', configureApi, TransitionComponent);
