import React, { Component } from 'react';
import styles from './style.scss';
/* eslint-disable no-console */
class PageFooterCom extends Component {
    constructor (props) {
        super(props);
        this.isScroll = true;
        this.isWindowScroll = this.isWindowScroll.bind(this);
    }

    componentDidMount () {
        this.isWindowScroll();
    }

    componentDidUpdate () {
        this.isWindowScroll();
    }
    isWindowScroll () {
        const clientHeight = document.documentElement.clientHeight;
        const scrollheight = document.body.scrollHeight;
        if (clientHeight > scrollheight) {
            this.footer && this.footer.classList.add(styles.footerFixed);
        } else {
            this.footer && this.footer.classList.remove(styles.footerFixed);
        }
    }

    render () {
        return (
            <div className={styles.FooterContainer}
                ref={(self) => {
                    this.footer = self;
                }}
            >
                <div className={styles.LeftRightW}>
                    <ul className={styles.navs}>
                        <li><a href="javascript:void(0)">保密及安全</a></li>
                        <li><a href="javascript:void(0)">网上使用条款</a></li>
                        <li><a href="javascript:void(0)">超链接政策</a></li>
                        <li><a href="javascript:void(0)">关于汇丰</a></li>
                    </ul>
                    <div className={styles.copyRightTxts}>
                        <p>@ 版权所有。汇丰(中国)有限公司2016。不得转载。</p>
                    </div>
                </div>
            </div>
        );
    }
}

PageFooterCom.propTypes = {
};

export default PageFooterCom;
