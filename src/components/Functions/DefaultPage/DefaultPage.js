import React from 'react';

import DefaultImg from '../../../assets/images/default-image.jpg';
import DefaultPageExpl from './DefaultPageExpl/DefaultPageExpl';
import DefaultPageBtn from '../DefaultPage/DefaultPageBtn/DefaultPageBtn';
import classes from './DefaultPage.css';

const defaultPage = () => (
    <div className={classes.DefaultPage}>
        <div className={classes.DefaultImg}>
            <img src={DefaultImg} alt='DefaultImg'/>
        </div>
        <DefaultPageExpl />
        <DefaultPageBtn />
    </div>
);

export default defaultPage;