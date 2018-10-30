import React from 'react';

import classes from './DefaultPageBtn.css';
import straightLine from '../../../../assets/images/straightLine.png';

const defaultPageBtn = () => (
    <div className={classes.DefaultPageBtnDiv}>
        <img src={straightLine} alt='straightLineImg' className={classes.straightLineImg}/>
        <button className={classes.DefaultPageBtn}>검색하러가기</button>
    </div>
);

export default defaultPageBtn;