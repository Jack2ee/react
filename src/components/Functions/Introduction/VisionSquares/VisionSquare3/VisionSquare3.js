import React from 'react';

import classes from './VisionSquare3.css';

const visionSquare3 = ( props ) => (
    <div className={classes.VisionSquare3}>
        <div className={classes.VisionSquareLayout}>
            <h3>{props.title}</h3>
            <div>{props.description1}</div>
            <div>{props.description2}</div>
        </div>
    </div>
)

export default visionSquare3;