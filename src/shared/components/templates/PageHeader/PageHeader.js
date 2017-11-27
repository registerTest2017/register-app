import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { get } from 'lodash';
import FontIcon from 'group-digital-wealth-common-ui/lib/web/components/ui/fontIcon';
import logo from '../../../../images/logo.png';
import styles from './style.scss';

/* eslint-disable no-console */
class PageHeaderCom extends Component {
    constructor (props, context) {
        super(props);
        this.state = {
            isHeaderFixed: false
        };
        this.AllState = context.store.getState();
        this.onWindowScroll = this.onWindowScroll.bind(this);
    }
    componentDidMount () {
        window.addEventListener('scroll', this.onWindowScroll);
    }
    componentDidUpdate () {
        this.onWindowScroll();
    }
    componentWillUnMount () {
        window.removeEventListener('scroll', this.onWindowScroll);
    }
    onWindowScroll () {
        let local = get(this.AllState, 'router.location.pathname');
        local = local.replace(/^\//, '');
        const lIndex = local.indexOf('/');
        const lLocal = local.substr(lIndex + 1);
        if (lLocal !== 'register' && !/register\//.test(lLocal)) {
            if (document.body.scrollTop >= 12 && this.container) {
                this.container.classList.add(styles.HeaderShadow);
                !this.state.isHeaderFixed && this.setState({
                    isHeaderFixed: true
                });
            } else if (this.container) {
                this.container.classList.remove(styles.HeaderShadow);
                this.state.isHeaderFixed && this.setState({
                    isHeaderFixed: false
                });
            }
        }
    }
    render () {
        return (
            <div
                ref={(self) => {
                    this.container = self;
                }}
            >
                <div className={styles.HeaderContainer}>
                    <div className={classNames(styles.HeaderTop, styles.LeftRightW)}>
                        { false &&
                            <ul className={styles.ulRight}>
                                <li>
                                    <a href="javascript:void(0)">
                                        <FontIcon className={styles.icon} icon="home" theme={styles} />
                                        <span className={styles.txts}>汇丰信用卡首页</span>
                                    </a>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
                <div className={classNames(styles.HeaderMain, styles.LeftRightW)}>
                    <div>
                        <ul className={styles.HeaderMainLeft}>
                            <li className={styles.logo}>
                                <img src={logo} alt="汇丰" />
                            </li>
                            <li className={styles.help}>
                                <div className={styles.helpTitle}>
                                    <p>申请帮助</p>
                                    <p>申请FAQ</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    this.state.isHeaderFixed &&
                    <div className={styles.headerMainH} />
                }
            </div>
        );
    }
}

PageHeaderCom.contextTypes = {
    store: PropTypes.object.isRequired
};

export default PageHeaderCom;
