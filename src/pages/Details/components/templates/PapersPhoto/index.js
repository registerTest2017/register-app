import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Popup from 'group-digital-wealth-common-ui/lib/web/components/widgets/popup';
import photoIng from '../../../../../images/photo_ing.jpg';
import photoEd from '../../../../../images/photo_ed.jpg';
import photoList from '../../../../../images/photo_list.jpg';
import styles from './style.scss';
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
class PapersPhoto extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isPapersPhotoIng: false,
            isPapersPhotoEd: false,
            isPapersPhotoList: false
        };
        this.PapersPhotoIng = this.PapersPhotoIng.bind(this);
        this.PapersPhotoEd = this.PapersPhotoEd.bind(this);
        this.PapersPhotoClose = this.PapersPhotoClose.bind(this);
        this.ItemClose = this.ItemClose.bind(this);
    }

    PapersPhotoIng () {
        this.setState({ isPapersPhotoIng: true });
    }

    PapersPhotoEd () {
        this.setState({ isPapersPhotoIng: false, isPapersPhotoEd: true });
    }

    PapersPhotoClose () {
        this.setState({ isPapersPhotoEd: false, isPapersPhotoList: true });
    }

    ItemClose () {
        this.setState({ isPapersPhotoList: false });
    }

    render () {
        return (
            <div className={styles.PapersPhoto}>
                {/* button */}
                <div className={styles.PapersPhotoBtn}>
                    <button onClick={this.PapersPhotoIng}>
                        拍照
                    </button>
                    { this.state.isPapersPhotoList &&
                        <div className={styles.PapersPhotoList}>
                            <ul>
                                <li>
                                    <img src={photoList} alt="" />
                                    <div
                                        tabIndex="0"
                                        role="button"
                                        onKeyPress={() => {}}
                                        className={styles.ItemClose}
                                        onClick={this.ItemClose}
                                    >X</div>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
                {/* popup */}
                <div className={styles.popUpPapersPhoto}>
                    <Popup hideOnOverlayClick theme={styles} show={this.state.isPapersPhotoIng}>
                        <div tabIndex="0" role="button" onKeyPress={() => {}}
                            onClick={this.PapersPhotoEd}
                        >
                            <img src={photoIng} alt="" />
                        </div>
                    </Popup>

                    <Popup hideOnOverlayClick theme={styles} show={this.state.isPapersPhotoEd}>
                        <div tabIndex="0" role="button" onKeyPress={() => {}}
                            onClick={this.PapersPhotoClose}
                        >
                            <img src={photoEd} alt="" />
                        </div>
                    </Popup>
                </div>
            </div>
        );
    }
}

PapersPhoto.propTypes = {
    // aa: PropTypes.func.isRequired
};

export default injectIntl(PapersPhoto);
