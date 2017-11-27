import React from 'react';
import { connect } from 'react-redux';
import { withServiceApi } from 'group-digital-wealth-api-client';
import { Transition } from 'group-digital-wealth-router';
import Details from '../components/Details';
import configureApi from '../services/configureApi';
import { detailRejectCustom, detailAcceptCustom, detailUpdateList, detailSurveyInfo, detailUpdateActAction } from './state/actions';

const mapStateTopProps = (state) => {
    return {
        detailResult: state.detail.detailResult,
        customID: state.detail.customID,
        acceptResult: state.detail.acceptResult,
        rejectResult: state.detail.rejectResult,
        surveyInfo: state.detail.surveyInfo,
        updateResult: state.detail.updateResult
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        detailRejectCustom: (value) => dispatch(detailRejectCustom(value)),
        detailAcceptCustom: (value) => dispatch(detailAcceptCustom(value)),
        detailUpdateList: (value) => dispatch(detailUpdateList(value)),
        detailSurveyInfo: (value) => dispatch(detailSurveyInfo(value)),
        detailUpdateAct: (value) => dispatch(detailUpdateActAction(value))
    };
};

const DetailsContainer = connect(
    mapStateTopProps,
    mapDispatchToProps
)(Details);
const TransitionComponent = (<Transition caption={'Loading Data'} />);
export default withServiceApi(DetailsContainer, 'SEARCH_SVC', configureApi, TransitionComponent);
