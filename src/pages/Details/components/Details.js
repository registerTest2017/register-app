import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import {
    DETAIL_GET_LIST
} from '../containers/state/actions';
import TabContainer from '../../../shared/components/templates/TabContainer/TabContainer';
import TabContent from '../../../shared/components/templates/TabContainer/TabContent';

import TabContentOne from './templates/TabContent/TabContentOne';
import TabContentTwo from './templates/TabContent/TabContentTwo';
import TabOperation from './templates/TabOperation';
import styles from './style.scss';
/* eslint-disable no-console */
class Details extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    componentDidMount () {
        this.props.emit(DETAIL_GET_LIST);
    }
    render () {
        const { intl } = this.props;
        const messages = intl.messages;
        return (
            <div className={styles.detailsContainer}>
                <h2 className={styles.detailsTitle}>
                    <span>{messages['details.DetailsTitle']}</span>
                </h2>
                <TabContainer>
                    <TabContent tabTitle={messages['details.PersionalInfo.Tab']}>
                        <TabContentOne {...this.props} />
                        <TabOperation {...this.props} />
                    </TabContent>
                    <TabContent tabTitle={messages['details.CheckResult.Tab']}>
                        <TabContentTwo {...this.props} />
                        <TabOperation {...this.props} />
                    </TabContent>
                </TabContainer>
            </div>
        );
    }
}

Details.propTypes = {
    emit: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired
};

export default injectIntl(Details);
