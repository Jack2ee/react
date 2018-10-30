import React, { Fragment } from 'react';

import classes from './Intro.css';

const intro = () => {
    const introTitle = '손쉬운 의약품 및 건강기능식품 검색';
    const introConcept = '"병용금기 성분"이란?';
    const introConceptDescription = '두 가지 이상의 유효성분을 함께 사용하는 경우 치료효과의 변화 또는 심각한 부작용 발생 등의 우려가 있어 동시에 사용하지 않아야 하는 유효성분의 조합';
    const introConceptSource = "-한국의약품안전관리원"

    return (
        <Fragment>
            <div><h2>{introTitle}</h2></div>
            <div>{introConcept}</div>
            <div className={classes.IntroConceptDescription}>{introConceptDescription}</div>
            <div className={classes.IntroConceptSource}>{introConceptSource}</div>
        </Fragment>
    );
};

export default intro;