import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SingleSearch.css';

const singleSearch = ( props ) => {
    const title = '약을 복용하고 계신다면?';
    const description = '약의 성분, 부작용, 임부 금기 등 정보를 알아보세요';
    const buttonContent = '단일 제품 검색';

    return (
        <div className={classes.SingleSearchBox}>
            <div className={classes.SingleSearchs}>
                <div>{title}</div>
                <div>{description}</div>
                <Link to='SingleSearch' className={classes.SingleBtn}>{buttonContent}</Link>
            </div>
        </div>
    )
}

export default singleSearch;