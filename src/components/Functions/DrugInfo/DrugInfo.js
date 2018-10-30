import React from 'react';

import Intro from './Intro/Intro';
import Multisearch from './Search/MultiSearch/MultiSearch';
import SingleSearch from './Search/SingleSearch/SingleSearch';
import classes from './DrugInfo.css';
import DefaultImage from '../../../assets/images/default-image.jpg'
import DefaultImage2 from '../../../assets/images/default-image.png';

const drugInfo = ( props ) => (
    <div className={classes.DrugInfoPage}>
        <div className={classes.IntroBox}>
            <Intro className={classes.Intro}/>
        </div>

        <div className={classes.SearchBox}>
            <div className={classes.SearchArea}>
                <Multisearch />
                <img src={DefaultImage} alt='searchAreaImg1' className={
                classes.SearchAreaImgs} />
            </div>

            <div className={classes.SearchArea}>
                <SingleSearch />
                <img src={DefaultImage2} alt='searchAreaImg1' className={
                classes.SearchAreaImgs} />
            </div>
        </div>
    </div>
);

export default drugInfo;