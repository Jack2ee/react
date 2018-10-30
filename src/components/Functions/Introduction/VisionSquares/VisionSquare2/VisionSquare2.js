import React from 'react';

import classes from './VisionSquare2.css';

const visionSquare2 = ( props ) => (
    <div className={classes.VisionSquare2}>
        <div className={classes.VisionSquareLayout}>
            <h3>{props.title}</h3>
            <div>{props.description1}</div>
            <div>{props.description2}</div>
        </div>
    </div>
)

export default visionSquare2;