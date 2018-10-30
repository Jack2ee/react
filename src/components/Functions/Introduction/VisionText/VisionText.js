import React from 'react';

import classes from './VisionText.css';

const visionText = ( props ) => (
    <div className={classes.Vision}>
        <div className={classes.VisionTextBox}>
            <div className={classes.VisionText}><h2>{props.title}</h2></div>
            <div className={classes.VisionText}>{props.description}</div>
            <button className={classes.VisionTextBtn}>{props.button}</button>
        </div>
    </div>
);

export default visionText;