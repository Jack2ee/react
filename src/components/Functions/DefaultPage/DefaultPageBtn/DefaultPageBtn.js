import React from 'react';
import { Link } from 'react-router-dom';

import classes from './DefaultPageBtn.css';

const defaultPageBtn = () => (
    <div className={classes.DefaultPageBtnDiv}>
        <Link to='SingleSearch' className={classes.DefaultPageBtn}>검색하러가기</Link>
    </div>
);

export default defaultPageBtn;