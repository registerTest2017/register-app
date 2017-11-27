import React, { PropTypes } from 'react';
import { get } from 'lodash';
import ImgCard from '../../../../../../../images/card.jpg';
import styles from '../../../../styles/Register.scss';

/* eslint-disable no-console */
const StepPageRight = (props, context) => {
    const registerCard = get(context.store.getState(), 'home.registerCard', { type: 'none', image: ImgCard });
    return (
        <div className={styles.cardContainer}>
            <span>您申请的是：HSBC{registerCard.cardClass}</span>
            <div className={styles.imgCard}>
                <img alt="card" src={registerCard.image || ImgCard} />
            </div>
            { false &&
                <ul className={styles.cardRewards}>
                    <li>●<span>每月2次9元看电影</span></li>
                    <li>●<span>无限次五星酒店豪华自助餐买一赠一</span></li>
                    <li>●<span>网络消费2倍积分</span></li>
                    <li>●<span>无限次650入住五星酒店及热门酒店</span></li>
                </ul>
            }
        </div>
    );
};

StepPageRight.contextTypes = {
    store: PropTypes.object.isRequired
};

export default StepPageRight;
