import React from 'react';

import classes from './Description.css';
import HandImg from '../../../assets/images/hand.png';

const description = ( props ) => (
    <div className={classes.Description}>
        <h2>{props.title}</h2>

        <div>{props.description}</div>

        <div>
            <img src={HandImg} alt='HandImg' />
        </div>

    </div>
);

export default description;