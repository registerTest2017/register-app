import React, { PropTypes } from 'react';
// import classNames from 'classnames';
import styles from '../../../styles/Register.scss';
/* eslint-disable no-console */
const StepHeader = (props) => {
    return (
        <div className={styles.stepHeader}>
            <span>{props.title}</span>
        </div>
    );
};

StepHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default StepHeader;
