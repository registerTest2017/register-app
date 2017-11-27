import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { NextPage } from 'group-digital-wealth-router';
import { Link } from 'react-router-dom';
import { StepHeader } from '../../Register/components/templates/atoms';
import ImgCard from '../../../images/card.jpg';
import ImgCard2 from '../../../images/card2.jpg';
import ImgCard3 from '../../../images/card3.jpg';
import styles from '../style.scss';
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const Home = (props) => {
    const cardClass = {
        // 储蓄卡
        cashCard: '储蓄卡',
        // 信用卡
        creditCard: '信用卡'
    };
    return (
        <div className={styles.registerContainer}>
            <div className={styles.HeaderH}>&nbsp;</div>
            <div className={styles.registerHome}>
                <div className={styles.mediaJquery}>
                    <h1 className={styles.h1}>欢迎来到HSBC注册系统</h1>
                    <div className={styles.cardClassTitle}>
                        <StepHeader title={cardClass.cashCard} />
                    </div>
                    <ul>
                        <li tabIndex="0" role="button"
                            onKeyDown={(evt) => {}}
                            onClick={() => {
                                props.homeUpdateCardType && props.homeUpdateCardType({
                                    type: 'car1',
                                    image: ImgCard,
                                    cardClass: cardClass.cashCard
                                });
                            }}
                        >
                            <NextPage className={styles.button}>
                                <span className={styles.img}><img alt="card" src={ImgCard} /></span>
                            </NextPage>
                        </li>
                    </ul>

                    <div className={styles.cardClassTitle}>
                        <StepHeader title={cardClass.creditCard} />
                    </div>
                    <ul>
                        <li tabIndex="0" role="button" onKeyPress={() => {}} onClick={() => {
                            props.homeUpdateCardType && props.homeUpdateCardType({
                                type: 'car2',
                                image: ImgCard2,
                                cardClass: cardClass.creditCard
                            });
                        }}
                        >
                            <NextPage className={styles.button}>
                                <span className={styles.img}><img alt="card" src={ImgCard2} /></span>
                            </NextPage>
                        </li>
                        <li tabIndex="0" role="button" onKeyPress={() => {}} onClick={() => {
                            props.homeUpdateCardType && props.homeUpdateCardType({
                                type: 'car3',
                                image: ImgCard3,
                                cardClass: cardClass.creditCard
                            });
                        }}
                        >
                            <NextPage className={styles.button}>
                                <span className={styles.img}><img alt="card" src={ImgCard3} /></span>
                            </NextPage>
                        </li>
                    </ul>

                    <button>
                        <Link to={`/${props.match.params.locale}/search`}>注册信息列表页</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {
    homeUpdateCardType: PropTypes.func.isRequired,
    match: PropTypes.object
    // intl: PropTypes.object.isRequired
};

export default injectIntl(Home);
