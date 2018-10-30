import React from 'react';

import classes from './VisionSquare4.css';

const visionSquare4 = ( props ) => (
    <div className={classes.VisionSquare4}>
        <div className={classes.VisionSquareLayout}>
            <h3>{props.title}</h3>
            <div>{props.description1}</div>
            <div>{props.description2}</div>
        </div>
    </div>
)

export default visionSquare4;