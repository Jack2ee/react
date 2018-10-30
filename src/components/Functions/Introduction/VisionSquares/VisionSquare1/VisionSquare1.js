import React from 'react';

import classes from './VisionSquare1.css';

const visionSquare1 = ( props ) => (
    <div className={classes.VisionSquare1}>
        <div className={classes.VisionSquareLayout}>
            <h3>{props.title}</h3>
            <div>{props.description1}</div>
            <div>{props.description2}</div>
        </div>
    </div>
)

export default visionSquare1;