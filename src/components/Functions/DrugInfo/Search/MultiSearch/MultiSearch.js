import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MultiSearch.css';

const multiSearch = ( props ) => {
    const title = '약을 두 개 이상 복용하신다면?';
    const description = '병용금기 여부를 확인하여 당신의 건강을 지키세요';
    const buttonContent = '병용금기 검색';

    return (
        <div className={classes.MultiSearchBox}>
            <div className={classes.MultiSearchs}>
                <div>{title}</div>
                <div>{description}</div>
                <Link to='MultiSearch' className={classes.MultiBtn}>{buttonContent}</Link>
            </div>
        </div>
    )
};

export default multiSearch;