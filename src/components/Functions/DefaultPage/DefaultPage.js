import React from 'react';

import DefaultImg from '../../../assets/images/default-image.jpg';
import DefaultPageExpl from './DefaultPageExpl/DefaultPageExpl';
import DefaultPageBtn from '../DefaultPage/DefaultPageBtn/DefaultPageBtn';
import classes from './DefaultPage.css';

const defaultPage = () => (
    <div className={classes.DefaultPage}>
        <img src={DefaultImg} alt='DefaultImg' className={classes.DefaultImg}/>
        <DefaultPageExpl />
        <DefaultPageBtn />
    </div>
);

export default defaultPage;