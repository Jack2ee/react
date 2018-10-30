import React from 'react';

import classes from './Footer.css';

const footer = () => (
    <div className={classes.Footer}>
        <div className={classes.FooterContents}>
            <div>ABOUT US</div>
            <div>DRUG INFO</div>
            <div>ABOUT</div>
            <div>CONTENTS</div>
            <div>LOG IN</div>
        </div>

        <div className={classes.FooterContents}>
            <div>CONTACT US</div>
            <div>twoyak@gmail.com</div>
        </div>

        <div className={classes.FooterContents}>
            <div>FOLLOW US</div>
            <div>DRUG INFO</div>
            <div>twoyak.facebook.com</div>
        </div>

        <div className={classes.FooterContents}>
        
        </div>

        <div className={classes.FooterContents}>
        
        </div>
    </div>
);

export default footer;