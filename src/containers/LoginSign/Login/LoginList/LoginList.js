import React from 'react';

import Btn from '../Btn/Btn';
import classes from './LoginList.css';

const loginList = () => {
    return (
        <div className={classes.InputBox}>
            <div className={classes.InputArea}>
            <h3>LogIn</h3>
            <div><p>ID</p> <input type='email' ></input></div>
            <div><p>PASSWORD</p> <input tyep='password' ></input></div>
            <div><Btn></Btn></div>
            </div>
        </div>
    )
};

export default loginList;